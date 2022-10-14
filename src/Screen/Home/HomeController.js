import React, { useState } from 'react';
import HomeView from './HomeView';

const HomeController = () => {

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operator, setOperator] = useState("#");

    const [results, setResults] = useState(0);

    const buttonCalc = (e) => {

    var input = e.target.value

        if (number === 0){
            setNumber(input);
        }

        if (number2 === 0 && operator === '+'){
            setNumber2(input);
        } 

        if (number2 === 0 && operator === '-'){
            setNumber2(input);
        } 

        if (number2 === 0 && operator === 'x'){
            setNumber2(input);
        } 

    } 

    const buttonSum = (e) => {
        var inputOperator = e.target.value

        if (operator === "#"){
            setOperator(inputOperator);
        } 
    }

    const buttonClear = () => {
        setNumber(0);
        setNumber2(0);
        setOperator("#");
        setResults(0);
    }

    const buttonDev = () => {
        alert("System in development");
    }

    const buttonTotals = () => {

            if (operator === "+"){
                setResults(parseInt(number) + parseInt(number2));
            }

            if (operator === "-"){
                setResults(parseInt(number) - parseInt(number2));
            }

            if (operator === "x"){
                setResults(parseFloat(number) * parseFloat(number2));
            }
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
        buttonSum={buttonSum}
        buttonTotals={buttonTotals}
        />
    )
}
export default HomeController;