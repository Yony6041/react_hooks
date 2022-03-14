import React, { useRef } from 'react';
import Button from './Button';

const ImperativeHandle = () => {
    const buttonRef = useRef(null);
  return (
    <div>
        <h1>Use imperativeHandle</h1>
        <button onClick={ () => {
            buttonRef.current.alterToggle();
        }}>
            Button From Parent 
        </button>
        <Button ref={buttonRef}/>
    </div>
  )
}

export default ImperativeHandle;