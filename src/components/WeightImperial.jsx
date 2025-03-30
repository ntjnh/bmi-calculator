export default function WeightImperial() {
    return (
        <fieldset className="sm:col-span-3">
            <legend className="block text-base/6 font-semibold text-teal-950">
                Weight
            </legend>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label htmlFor="weight-st" className="block text-sm/6 font-medium text-teal-800">
                        Stone
                    </label>
                    <div className="mt-2">
                        <input
                            id="weight-st"
                            name="weight-st"
                            type="number"
                            placeholder="0 st"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-teal-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="weight-lbs" className="block text-sm/6 font-medium text-teal-800">
                        Pounds
                    </label>
                    <div className="mt-2">
                        <input
                            id="weight-lbs"
                            name="weight-lbs"
                            type="number"
                            placeholder="0 lbs"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-teal-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
        </fieldset>
    )
}
