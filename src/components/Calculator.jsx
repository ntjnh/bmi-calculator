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

        let height
        let weight
        
        if (units === 'metric') {
            
            // Check if height or weight is blank
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
                setShowError(false)
                setInvalidHeight(false)
                setInvalidWeight(false)

                height = heightRef.current.value
                weight = weightRef.current.value
            }

        } else {
            height = imperialHeight(heightFtRef.current.value, heightInRef.current.value)
            weight = imperialWeight(weightStRef.current.value, weightLbsRef.current.value)
        }

        setBmi(calculate(height, weight))
        setHealthyRange(range(height))
        setCanReset(prev => !prev)

        // Check if height is unrealistic - between 91.44cm (3 feet) and 274.32cm (9 feet)
            // Please enter a height between 91.44 cm and 274.32 cm.
            // The height you entered is not valid. It should be between 91.44 cm and 274.32 cm.
        // Check if weight is unrealistic - between 24.95kg () and 453.59kg (1000 lbs)
            // "Please enter a weight between 24.95 kg and 453.59 kg."
            // "The weight you entered is not valid. It should be between 24.95 kg and 453.59 kg."

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
