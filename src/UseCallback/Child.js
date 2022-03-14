import React, { useEffect } from 'react';

const Child = ({returnCommment}) => {
    useEffect(() => {
        console.log('Function was called');
    }, [returnCommment]);
  return <div>{returnCommment('Pedro')}</div>;
}

export default Child;