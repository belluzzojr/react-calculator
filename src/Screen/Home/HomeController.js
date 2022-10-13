import React, { useState } from 'react';
import HomeView from './HomeView';

const HomeController = () => {

    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0);
    const [operator, setOperator] = useState("+")
    const [results, setResults] = useState(0);

    const buttonCalc = (e) => {
        var input = e.target.value
        if (number === 0){
            setNumber(input);
        } else 
            setNumber(number + input);
        } 

    const buttonClear = () => {
        setNumber(0);
    }
    const buttonDev = () => {
        alert("System in development");
    }

    return (
        <HomeView
        number={number}
        number2={number2}
        operator={operator}
        results={results}
        buttonCalc={buttonCalc}
        buttonDev={buttonDev}
        buttonClear={buttonClear}
        />
    )
}
export default HomeController;