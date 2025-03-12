import React from 'react'
import './App.css'

function App() {

    return (
        <>
            <header>
                <h1>BMI Calculator</h1>
            </header>

            <main>
                <section className="calculator">
                    <h2>Enter your details below</h2>

                    <form>
                        <div className="units">
                            <div>
                                <input type="radio" name="units" id="metric" />
                                <label htmlFor="metric">Metric</label>
                            </div>

                            <div>
                                <input type="radio" name="units" id="imperial" />
                                <label htmlFor="imperial">Imperial</label>
                            </div>
                        </div>

                        <div className="measurements">
                            <div>
                                <label htmlFor="height">Height</label>
                                <input type="text" name="height" id="height" />
                            </div>

                            <div>
                                <label htmlFor="weight">Weight</label>
                                <input type="text" name="weight" id="weight" />
                            </div>
                        </div>

                        <button className="calculate-button" type="submit">Calculate</button>
                    </form>
                </section>
            </main>

            <footer></footer>
        </>
    )
}

export default App
