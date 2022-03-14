import React, {useEffect, useState} from 'react'
import axios from 'axios';
import userEvent from '@testing-library/user-event';

const EffectTutorial = () => {
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);

    let inputChangeHandler = (event) => {
        const newValue = event.target.value;
        setData(newValue);
        console.log("data:", data);
    };
    useEffect(() => {
        console.log('the user changed its input!');
    }, [data]);
    
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            setData(response.data[0].email);
            console.log('api was called!');
        });
    }, [count]);

    

  return (
    <div>
        Use Effect Hook
        <input placeholder='enter something... ' onChange={inputChangeHandler}/>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={() => {setCount(count + 1)} }>Click me!</button>
    </div>
  )
}

export default EffectTutorial