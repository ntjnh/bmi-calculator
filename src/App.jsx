import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Info from './components/Info'
import Footer from './components/Footer'
import classify from './lib/classify'

function App() {
    const [bmi, setBmi] = useState(0)
    const [healthyRange, setHealthyRange] = useState([0, 0])
    
    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen w-screen">
            <div className="wrap w-3xl">
                <header className="pt-8 pb-6 md:py-6 text-center">
                    <h1 className="font-medium text-3xl md:text-5xl tracking-[-0.0125em]">
                        BMI Calculator
                    </h1>
                </header>

                <main className="pb-6 px-4 md:px-0 md:py-6">

                    <div className="gap-y-4 md:gap-y-0 grid grid-cols-1 md:grid-cols-[59%_38%] items-center justify-between">
                        <Calculator
                            setBmi={setBmi}
                            setHealthyRange={setHealthyRange}
                        />

                        <section className="bg-teal-200 flex h-full items-center order-1 md:order-2 p-4 md:p-6 rounded-md text-center">
                            
                            {isNaN(bmi) || bmi < 1 ? (

                                <div className="w-full">
                                    <h2 className="font-semibold mb-2 md:mb-4 text-xl md:text-2xl text-teal-950">
                                        Welcome!
                                    </h2>
                                    <p className="max-w-11/12 md:max-w-none mt-1 mx-auto text-base text-teal-950 tracking-wide">
                                        Enter your height and weight to see your BMI results here.
                                    </p>
                                </div>
                            ) : (

                                <div className="text-teal-950 w-full">
                                    <p className="mb-1 text-base md:text-lg tracking-wide">
                                        Your BMI is
                                    </p>
                                    <h2 className="font-semibold mb-2 md:mb-4 text-3xl md:text-4xl">
                                        {bmi}
                                    </h2>

                                    <p className="mb-2 md:mb-4 text-base md:text-lg tracking-wide">
                                        Your BMI is in the<br />
                                        <strong>{classify(bmi)}</strong><br />
                                        category.
                                    </p>

                                    <p className="text-base md:text-lg tracking-wide">
                                        The ideal weight for your height is between <strong>{healthyRange[0]}</strong> and <strong>{healthyRange[1]} kg</strong>.
                                    </p>
                                </div>

                            )}
                        
                        </section>

                    </div>

                    <Info />

                </main>

                <Footer />
            </div>
        </div>
    )
}

export default App
