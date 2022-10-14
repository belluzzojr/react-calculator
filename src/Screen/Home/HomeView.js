import React from 'react';
import "./Home.css"

export default function HomeView ( { buttonDev, buttonCalc, buttonClear, 
    number, number2, operator, results , 
    buttonSum, buttonTotals } ){

    return(
        <div className='home'>
            
        <div className='calculator'>
        <div className='step1'>
            <div className='resultscalc'>
                <p>{number} {operator} {number2}</p>
                <p>== {results}</p>
            </div>
        </div>

        <div className='step2'>
        <div className='buttonsline'>
            <button className='buttonfirst' onClick={buttonClear}>C</button>
            <button className='buttonmid' onClick={buttonDev}>%</button>
            <button className='buttonmid' onClick={buttonSum} value={"x"}>X</button>
            <button className='buttonend' onClick={buttonDev}>!</button>
        </div>
        <div className='buttonsline'>
            <button className='buttonnumbers' onClick={buttonCalc} value={1}>1</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={2}>2</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={3}>3</button>
            <button className='buttonend2' onClick={buttonSum} value={"-"}>-</button>
        </div>
        <div className='buttonsline'>
            <button className='buttonnumbers' onClick={buttonCalc} value={4}>4</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={5}>5</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={6}>6</button>
            <button className='buttonend2' onClick={buttonSum} value={"+"}>+</button>
        </div>
        <div className='buttonsline'>
            <button className='buttonnumbers' onClick={buttonCalc} value={7}>7</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={8}>8</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={9}>9</button>
            <button className='buttonend2' onClick={buttonTotals}>=</button>
        </div>
        <div className='buttonsline'>
            <button className='buttonnumbers' onClick={buttonDev}>%</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={0}>0</button>
            <button className='buttonnumbers' onClick={buttonDev}>.</button>
            <button className='buttonend2' onClick={buttonDev}>?</button>
        </div>
    </div>
</div>
</div>
    )
}