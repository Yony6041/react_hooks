import React, {useEffect, useLayoutEffect, useRef} from 'react';

const LayoutEffectTutorial = () => {
    const inputRef = useRef(null);
    // This runs always before the useEffect.
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
      }, []);

    useEffect(() => {
        inputRef.current.value = 'HELLO';
    }, []);

    return <div><input ref={inputRef} value= 'PEDRO' style={{width:400, height:80}}/></div>;
};

export default LayoutEffectTutorial;