// We all collaborated with the each other to create this calculator!


import { useState } from 'react'

export default function Calculator() {

    const [display, setDisplay] = useState(0);
    const [currentCalc, setCurrentCalc] = useState('')


    const handleClick = (event) => {
        event.preventDefault();
        const newValue = currentCalc + event.target.value
        console.log(newValue)
        setCurrentCalc(newValue)
        setDisplay(newValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(eval(currentCalc));
        console.log(currentCalc)
        let total = eval(currentCalc)
        setCurrentCalc(total)
    }

    const resetCalc = (event) =>{
        event.preventDefault();
        setDisplay(0);
        setCurrentCalc('');
    }

    const backspace = (event) =>{
        event.preventDefault()
        const newValue = currentCalc.slice(0, -1)
        console.log(newValue)
        setCurrentCalc(newValue)
        setDisplay(newValue)
    }

    return (
        <div id="calcContainer">
            <section id="display"><h1>{display}</h1></section>
            <section id="buttons-container">
                <div className="row">
                    <button className="calc-button tertiary-btn" onClick={resetCalc}>AC</button>
                    <div className="calc-button tertiary-btn" onClick={backspace}>
                        <span className="material-symbols-rounded">backspace</span>
                    </div>                    
                    <button className="calc-button tertiary-btn" value="%" onClick={handleClick} >%</button>
                    <button className="calc-button primary-btn" value="/" onClick={handleClick} >&divide;</button>
                </div>
                <div className="row">
                    <button className="calc-button primary-container-btn" value="7" onClick={handleClick} >7</button>
                    <button className="calc-button primary-container-btn" value="8" onClick={handleClick} >8</button>
                    <button className="calc-button primary-container-btn" value="9" onClick={handleClick} >9</button>
                    <button className="calc-button primary-btn" value="*" onClick={handleClick} >*</button>
                </div>
                <div className="row">
                    <button className="calc-button primary-container-btn" value="4" onClick={handleClick} >4</button>
                    <button className="calc-button primary-container-btn" value="5" onClick={handleClick} >5</button>
                    <button className="calc-button primary-container-btn" value="6" onClick={handleClick} >6</button>
                    <button className="calc-button primary-btn" value="-" onClick={handleClick} >-</button>
                </div>
                <div className="row">
                    <button className="calc-button primary-container-btn" value="1" onClick={handleClick} >1</button>
                    <button className="calc-button primary-container-btn" value="2" onClick={handleClick} >2</button>
                    <button className="calc-button primary-container-btn" value="3" onClick={handleClick} >3</button>
                    <button className="calc-button primary-btn" value="+" onClick={handleClick} >+</button>
                </div>
                <div className="row">
                    <button className="calc-button primary-container-btn" id="zero-btn" value="0" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>0</button>
                    <button className="calc-button primary-container-btn" value="." onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>.</button>
                    <button className="calc-button primary-btn" value="=" onClick={handleSubmit}>=</button>
                </div>
            </section>
        </div>
    )
}