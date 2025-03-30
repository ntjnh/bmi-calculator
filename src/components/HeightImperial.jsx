export default function HeightImperial() {
    return (
        <fieldset className="sm:col-span-3">
            <legend className="block text-base/6 font-semibold text-teal-950">
                Height
            </legend>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label htmlFor="height-ft" className="block text-sm/6 font-medium text-teal-800">
                        Feet
                    </label>
                    <div className="mt-2">
                        <input
                            id="height-ft"
                            name="height-ft"
                            type="number"
                            placeholder="0 ft"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-teal-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="height-in" className="block text-sm/6 font-medium text-teal-800">
                        Inches
                    </label>
                    <div className="mt-2">
                        <input
                            id="height-in"
                            name="height-in"
                            type="number"
                            placeholder="0 in"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-teal-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
        </fieldset>
    )
}
