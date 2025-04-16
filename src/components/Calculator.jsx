import { useState } from 'react'
import Buttons from './form/Buttons'
import Height from './Height'
import Weight from './Weight'
import RadioInput from './form/RadioInput'

export default function Calculator({ handleSubmit, handleHeightChange, handleWeightChange, height, weight, reset }) {
    const [units, setUnits] = useState('metric')
    
    const handleUnitChange = e => setUnits(e.target.value)

    return (
        <section className="bg-neutral-200 calculator p-6 rounded-md">
            <h2 className="text-xl/7 font-semibold text-teal-950">Enter your details below</h2>

            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-teal-950/10 mb-0 pb-6">
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
                                height={height}
                                onChange={handleHeightChange}
                                units={units}
                            />
                            <Weight
                                weight={weight}
                                onChange={handleWeightChange}
                                units={units}
                            />

                        </div>
                    </div>
                    
                    <Buttons
                        reset={reset}
                    />
                </div>

            </form>
        </section>
    )
}
