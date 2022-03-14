import React, {useState, useEffect, useRef} from 'react'

const RefTutorial = () => {
    const inputRef = useRef(null);
    const [name, setName] = useState('');
    const renderCount = useRef(1);   
    const onClick = () => {
        // focus fixes the user on the input
        inputRef.current.focus(useRef);
    };
    //Don't forget ++ is iqual to +1
    useEffect(() => {
        renderCount.current = ++renderCount.current;
    });

    return (
        <div>
          <h1>Use Ref hook</h1>
          <h1>nombre</h1>
          <input type="text" placeholder="Ex..." ref={inputRef} />
          <button onClick={onClick}>Change name</button>
          <h1>Second example:</h1>
          <input value = {name} onChange= {e => setName(e.target.value)}/>
          <div>I rendered {renderCount.current} times</div>
        </div>
    );
};

export default RefTutorial;