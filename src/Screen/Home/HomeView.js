import React from 'react';
import "./Home.css"

export default function HomeView ( { buttonDev, buttonCalc, buttonClear, number, number2, operator, results} ){

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
            <button className='buttonmid'>%</button>
            <button className='buttonmid'>X</button>
            <button className='buttonend'>!</button>
        </div>
        <div className='buttonsline'>
            <button className='buttonnumbers' onClick={buttonCalc} value={1}>1</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={2}>2</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={3}>3</button>
            <button className='buttonend2'>-</button>
        </div>
        <div className='buttonsline'>
            <button className='buttonnumbers' onClick={buttonCalc} value={4}>4</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={5}>5</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={6}>6</button>
            <button className='buttonend2' onClick>+</button>
        </div>
        <div className='buttonsline'>
            <button className='buttonnumbers' onClick={buttonCalc} value={7}>7</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={8}>8</button>
            <button className='buttonnumbers' onClick={buttonCalc} value={9}>9</button>
            <button className='buttonend2'>=</button>
        </div>
        <div className='buttonsline'>
            <button className='buttonnumbers'>%</button>
            <button className='buttonnumbers'>0</button>
            <button className='buttonnumbers'>.</button>
            <button className='buttonend2' onClick={buttonDev}>?</button>
        </div>
    </div>
</div>
</div>
    )
}