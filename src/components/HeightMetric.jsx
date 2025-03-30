export default function HeightMetric() {
    return (
        <>
            <fieldset className="sm:col-span-3">
                <legend className="block text-base/6 font-semibold text-teal-950">
                    Height
                </legend>
                <label htmlFor="height" className="block text-sm/6 font-medium text-teal-800">
                    Centimetres
                </label>
                <div className="mt-2">
                    <input
                        id="height"
                        name="height"
                        type="number"
                        placeholder="0 cm"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
                    />
                </div>
            </fieldset>
        </>
    )
}
