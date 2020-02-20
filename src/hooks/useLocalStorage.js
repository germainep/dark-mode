//import liraries
import React, { useState, useEffect } from 'react';

// create a component
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(()=> {
    const item = window.localStorage.getItem(key)

    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  } 

};


//make this component available to the app
export default [storedValue];
