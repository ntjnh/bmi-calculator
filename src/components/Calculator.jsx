import { useRef, useState } from 'react'
import Buttons from './form/Buttons'
import Height from './Height'
import Weight from './Weight'
import RadioInput from './form/RadioInput'
import calculate from '../lib/calculate'
import { imperialHeight, imperialWeight } from '../lib/imperial'
import range from '../lib/range'

export default function Calculator({ setBmi, setHealthyRange }) {
    const [units, setUnits] = useState('metric')
    const [canReset, setCanReset] = useState(false)
    const [showError, setShowError] = useState(false)
    const [invalidHeight, setInvalidHeight] = useState(false)
    const [invalidWeight, setInvalidWeight] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const heightRef = useRef()
    const heightFtRef = useRef()
    const heightInRef = useRef()
    const weightRef = useRef()
    const weightStRef = useRef()
    const weightLbsRef = useRef()

    const handleUnitChange = e => setUnits(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        setShowError(false)
        setInvalidHeight(false)
        setInvalidWeight(false)

        let height
        let weight
        
        // Check if height or weight is blank
        if (units === 'metric') {

            if (!heightRef.current.value && !weightRef.current.value) {

                setShowError(true)
                setInvalidHeight(true)
                setInvalidWeight(true)
                setErrorMessage('Please enter your height and weight.')

            } else if (!heightRef.current.value) {

                setShowError(true)
                setInvalidHeight(true)
                setErrorMessage('Height cannot be blank.')

            } else if (!weightRef.current.value) {

                setShowError(true)
                setInvalidWeight(true)
                setErrorMessage('Weight cannot be blank.')

            } else {
                const validHeight = parseInt(heightRef.current.value, 10) > 91.43 && parseInt(heightRef.current.value, 10) < 274.33
                const validWeight = parseInt(weightRef.current.value, 10) > 24.94 && parseInt(weightRef.current.value, 10) < 453.59

                if (!validHeight && !validWeight) {
                    setShowError(true)
                    setInvalidHeight(true)
                    setInvalidWeight(true)
                    setErrorMessage('Please enter a height between 91.44cm and 274.32cm and a weight between 24.95kg and 453.59kg.')
                } else if (!validHeight) {
                    setShowError(true)
                    setInvalidHeight(true)
                    setErrorMessage('Please enter a height between 91.44cm and 274.32cm.')
                } else if (!validWeight) {
                    setShowError(true)
                    setInvalidWeight(true)
                    setErrorMessage('Please enter a weight between 24.95kg and 453.59kg.')
                } else {

                    height = heightRef.current.value
                    weight = weightRef.current.value
                }
            }

        } else {
            if (
                (!heightFtRef.current.value || !heightInRef.current.value) &&
                (!weightStRef.current.value || !weightLbsRef.current.value)
            ) {

                setShowError(true)
                setInvalidHeight(true)
                setInvalidWeight(true)
                setErrorMessage('Please enter your height and weight.')

            } else if (!heightFtRef.current.value || !heightInRef.current.value) {

                setShowError(true)
                setInvalidHeight(true)
                setErrorMessage('Please fill in both height fields.')

            } else if (!weightStRef.current.value || !weightLbsRef.current.value) {

                setShowError(true)
                setInvalidWeight(true)
                setErrorMessage('Please fill in both weight fields.')

            } else {

                const validHeightFt = parseInt(heightFtRef.current.value, 10) >= 3 && parseInt(heightFtRef.current.value, 10) <= 9
                const validHeightIn = parseInt(heightInRef.current.value, 10) >= 0 && parseInt(heightInRef.current.value, 10) < 12
                const validHeight = validHeightFt && validHeightIn

                const validWeightSt = parseInt(weightRef.current.value, 10) >= 3 && parseInt(weightRef.current.value, 10) <= 71
                const validWeightLbs = parseInt(weightRef.current.value, 10) >= 0 && parseInt(weightRef.current.value, 10) <= 14
                const validWeight = validWeightSt && validWeightLbs

                if (!validHeight && !validWeight) {
                    setShowError(true)
                    setInvalidHeight(true)
                    setInvalidWeight(true)
                    setErrorMessage('Please enter a height between 3ft and 9ft and a weight between 24.95kg and 453.59kg.')
                } else if (!validHeight) {
                    setShowError(true)
                    setInvalidHeight(true)
                    setErrorMessage('Please enter a height between 3 feet and 9 feet. Inches must be between 0 and 11.')
                } else if (!validWeight) {
                    setShowError(true)
                    setInvalidWeight(true)
                    setErrorMessage('Please enter a weight between 3 and 71 stone. Pounds must be between 0 and 13.')
                } else {

                    height = heightRef.current.value
                    weight = weightRef.current.value
                }

                height = imperialHeight(heightFtRef.current.value, heightInRef.current.value)
                weight = imperialWeight(weightStRef.current.value, weightLbsRef.current.value)

            }
        }

        setBmi(calculate(height, weight))
        setHealthyRange(range(height))
        setCanReset(prev => !prev)

        

    }

    const reset = () => {
        if (units === 'metric') {
            heightRef.current.value = ''
            weightRef.current.value = ''
        } else {
            heightFtRef.current.value = ''
            heightInRef.current.value = ''
            weightStRef.current.value = ''
            weightLbsRef.current.value = ''
        }

        setBmi(0)
        setHealthyRange([0, 0])
        setShowError(false)
        setInvalidHeight(false)
        setInvalidWeight(false)
        setCanReset(prev => !prev)
    }

    return (
        <section className="bg-neutral-200 calculator order-2 md:order-1 p-4 md:p-6 rounded-md">
            <h2 className="text-lg lg:text-xl/7 font-semibold text-teal-950">
                Enter your details below
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="md:space-y-12">
                    <div className="border-b border-teal-800/20 mb-0 pb-4 md:pb-6">
                        <div className="mt-4 md:mt-6 grid grid-cols-6 gap-4 lg:gap-6">
                            <div className="col-span-6">
                                <fieldset>
                                    <div className="flex space-x-4 md:space-x-6">
                                        <RadioInput
                                            defaultChecked={true}
                                            fieldId="metric"
                                            fieldName="units"
                                            fieldLabel="Metric"
                                            onChange={handleUnitChange}
                                        />
                                        <RadioInput
                                            fieldId="imperial"
                                            fieldName="units"
                                            fieldLabel="Imperial"
                                            onChange={handleUnitChange}
                                        />
                                    </div>
                                </fieldset>
                            </div>

                            {showError && 
                                <div className="sm:col-span-6 error-msg" role="alert">
                                    <span>{errorMessage}</span>
                                </div>
                            }

                            <Height
                                height={heightRef}
                                heightFt={heightFtRef}
                                heightIn={heightInRef}
                                units={units}
                                invalid={invalidHeight}
                            />
                            <Weight
                                weight={weightRef}
                                weightSt={weightStRef}
                                weightLbs={weightLbsRef}
                                units={units}
                                invalid={invalidWeight}
                            />

                        </div>
                    </div>
                    
                    <Buttons canReset={canReset} reset={reset} />
                </div>

            </form>
        </section>
    )
}
