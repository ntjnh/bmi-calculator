import React from 'react'
import './App.css'
import Calculator from './components/Calculator'

function App() {

    return (
        <div className="flex flex-wrap items-center justify-center h-screen w-screen">
            <div className="wrap max-w-3xl">
                <header className="text-center">
                    <h1 className="text-4xl">BMI Calculator</h1>
                </header>

                <main className="grid grid-cols-[60%_36%] justify-between py-12">
                    <Calculator />

                    <section className="border border-teal-200 bg-teal-200 flex items-center p-4 rounded-md text-center">
                        <div className="">
                            <h2 className="font-semibold mb-4 text-xl text-teal-950">Welcome!</h2>
                            <p className="mt-1 text-sm/6 text-teal-800">
                                Enter your height and weight and you'll see your BMI results here
                            </p>

                            {/* results */}
                        </div>
                    </section>
                </main>

                <footer className="text-center">
                    © {2025}
                </footer>
            </div>
        </div>
    )
}

export default App
