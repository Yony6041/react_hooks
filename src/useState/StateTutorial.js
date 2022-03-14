import React, {useState} from 'react';


const StateTutorial = () => {
    let example = {
        inputValue: 'John',
        counter: 30
    };
    // counter is the stored value and setCounter is the function to update the stored value.
    var [counter, setCounter] = useState(0);
    var [inputValue, setInputValue] = useState('Jorge');
    var [bothVars, setBothVars] = useState(example);

    const objectOnChange = () => {
    //   let newValue = {
    //       inputValue: inputValue,
    //       counter: counter
    //   };
    //   setBothVars(newValue);
        setBothVars({counter: counter, inputValue: inputValue});
        console.log(bothVars);
    };

    const increment = () => {
        setCounter(++counter);
        console.log(counter);
    };
     
    // inputChangeHandler (onChange) is the function to update the stored value of the string.
    let inputChangeHandler = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        console.log(inputValue);
    };
    return (
        <div>
            {counter}
            <button onClick={increment}>Increment</button>
            <input placeholder='enter something... ' onChange={inputChangeHandler}/>
            {inputValue}
            <button onClick={objectOnChange}>Change Object</button>
        </div>
    )
};



export default StateTutorial;