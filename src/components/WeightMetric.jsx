export default function WeightMetric() {
    return (
        <fieldset className="sm:col-span-3">
            <legend className="block text-base/6 font-semibold text-teal-800">
                Weight
            </legend>

            <label htmlFor="weight" className="block text-sm/6 font-medium text-teal-800">
                Kilograms
            </label>
            <div className="mt-2">
                <input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="0 kg"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-teal-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
                />
            </div>
        </fieldset>
    )
}
