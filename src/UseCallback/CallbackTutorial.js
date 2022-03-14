import axios from 'axios';
import { useCallback, useState} from 'react';
import Child from './Child';

const MemoTutorial = () => {
    const [toggle, setToggle] = useState(null);
    const [data, setData] = useState('aergaerg');

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

  return (
    <div className="App">
        <Child returnComment={returnComment} />
        
        <button
            onClick={() => {
                setToggle(!toggle);
            }}
        >
        {" "}
        Toggle
        </button>
        {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default MemoTutorial;