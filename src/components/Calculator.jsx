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
            height = heightRef.current.value
            weight = weightRef.current.value
        } else {
            height = imperialHeight(heightFtRef.current.value, heightInRef.current.value)
            weight = imperialWeight(weightStRef.current.value, weightLbsRef.current.value)
        }

        setBmi(calculate(height, weight))
        setHealthyRange(range(height))
    }

    return (
        <section className="bg-neutral-200 calculator p-6 rounded-md">
            <h2 className="text-xl/7 font-semibold text-teal-950">
                Enter your details below
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-teal-800/20 mb-0 pb-6">
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <fieldset>
                                    <div className="flex space-x-6">
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

                            <Height
                                height={heightRef}
                                heightFt={heightFtRef}
                                heightIn={heightInRef}
                                units={units}
                            />
                            <Weight
                                weight={weightRef}
                                weightSt={weightStRef}
                                weightLbs={weightLbsRef}
                                units={units}
                            />

                        </div>
                    </div>
                    
                    <Buttons />
                </div>

            </form>
        </section>
    )
}
