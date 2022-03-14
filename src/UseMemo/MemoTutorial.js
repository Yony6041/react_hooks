import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';

const MemoTutorial = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(null);

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            setData(res.data);
        });
    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        };
        console.log('this was computed!');
        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), [data]);
    // https://stackoverflow.com/questions/56028913/usememo-vs-useeffect-usestate
  return (
    <div className="App">
        <h1>MemoTutorial</h1>
        <div>{findLongestName(data)}</div>
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