import { useState } from 'react'
import HeightImperial from './HeightImperial'
import HeightMetric from './HeightMetric'
import WeightImperial from './WeightImperial'
import WeightMetric from './WeightMetric'

export default function Calculator() {
    const [units, setUnits] = useState('metric')

    const handleChange = e => {
        setUnits(e.target.value)
    }

    return (
        <section className="calculator">
            <h2 className="text-lg/7 font-semibold text-teal-950">Enter your details below</h2>

            <form>
                <div className="space-y-12">
                    <div className="border-b border-teal-950/10 mb-0 pb-12">
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <fieldset>
                                    <div className="flex space-x-6">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                defaultChecked
                                                id="metric"
                                                name="units"
                                                type="radio"
                                                value="metric"
                                                onChange={handleChange}
                                                className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-teal-600 checked:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            />
                                            <label htmlFor="metric" className="block text-base/6 font-medium text-teal-950">
                                                Metric
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="imperial"
                                                name="units"
                                                type="radio"
                                                value="imperial"
                                                onChange={handleChange}
                                                className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-teal-600 checked:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                            />
                                            <label htmlFor="imperial" className="block text-base/6 font-medium text-teal-950">
                                                Imperial
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            {
                                units === 'metric' ?
                                (
                                    <>
                                        <HeightMetric />
                                        <WeightMetric />
                                    </>
                                ) : (
                                    <>
                                        <HeightImperial />
                                        <WeightImperial />
                                    </>
                                )
                            }

                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-start gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                        >
                            Calculate
                        </button>
                    </div>
                </div>

            </form>
        </section>
    )
}
