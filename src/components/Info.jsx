export default function Info() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-between mt-4 md:mt-6">
            <section className="bg-teal-100 flex items-center px-4 pt-4 pb-6 md:p-6 rounded-md text-teal-950">

                <div className="w-full">
                    <h2 className="font-medium mb-2 text-xl md:text-[1.25rem] lg:text-2xl tracking-wide">
                        Your result
                    </h2>

                    <p className="mb-4 md:mb-6 lg:mb-4 text-sm md:text-base tracking-wide">
                        Your BMI result falls into one of these weight categories:
                    </p>

                    <table className="categories w-full">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>BMI</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Underweight</td>
                                <td>18.4 or less</td>
                            </tr>
                            <tr>
                                <td>Healthy weight</td>
                                <td>18.5 to 24.9</td>
                            </tr>
                            <tr>
                                <td>Overweight</td>
                                <td>25 to 29.9</td>
                            </tr>
                            <tr>
                                <td>Obese</td>
                                <td>30 or more</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

            </section>

            <section className="bg-teal-950 flex px-4 pt-4 pb-6 md:p-6 rounded-md text-teal-50">

                <div className="w-full">
                    <h2 className="font-medium mb-2 text-xl md:text-[1.25rem] lg:text-2xl tracking-wide">
                        How your BMI is calculated
                    </h2>

                    <p className="mb-4 text-sm md:text-base tracking-wide">
                        Your BMI is calculated by dividing your weight in kilograms by your height in metres squared.
                    </p>

                    <p className="mb-4 md:mb-6 text-sm md:text-base tracking-wider">
                        For example, if you weigh 69 kilograms and are 188 centimetres tall, you work out your BMI like this:
                    </p>
                    <p className="text-center text-xl md:text-2xl tracking-wider">
                        69 ÷ 1.88² = 19.5
                    </p>
                </div>

            </section>
        </div>
    )
}
