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
                <header className="py-6 text-center">
                    <h1 className="font-medium text-5xl tracking-[-0.0125em]">
                        BMI Calculator
                    </h1>
                </header>

                <main className="py-6">

                    <div className="grid grid-cols-[59%_38%] items-center justify-between">
                        <Calculator
                            setBmi={setBmi}
                            setHealthyRange={setHealthyRange}
                        />

                        <section className="bg-teal-200 flex h-full items-center p-6 rounded-md text-center">
                            
                            {isNaN(bmi) || bmi < 1 ? (

                                <div className="w-full">
                                    <h2 className="font-semibold mb-4 text-2xl text-teal-950">
                                        Welcome!
                                    </h2>
                                    <p className="mt-1 text-base text-teal-950 tracking-wide">
                                        Enter your height and weight to see your BMI results here.
                                    </p>
                                </div>
                            ) : (

                                <div className="text-teal-950 w-full">
                                    <p className="mb-1 text-lg tracking-wide">
                                        Your BMI is
                                    </p>
                                    <h2 className="font-semibold mb-4 text-4xl">
                                        {bmi}
                                    </h2>

                                    <p className="mb-4 text-lg tracking-wide">
                                        Your BMI is in the<br />
                                        <strong>{classify(bmi)}</strong><br />
                                        category.
                                    </p>

                                    <p className="text-lg tracking-wide">
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
