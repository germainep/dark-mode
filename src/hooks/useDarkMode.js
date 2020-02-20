//import liraries
import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage'


const useDarkMode = () => {
 
  const [enableDarkMode, setEnableDarkMode] = useLocalStorage('dark', false);
  useEffect(() => {
    //get body element from DOM
    const body = document.getElementsByTagName("body");

    // change class on body 
    enableDarkMode ? body.classList.add("dark-mode") : body.classList.remove('dark-mode');
 }, [enableDarkMode]);
 return [enableDarkMode, setEnableDarkMode]
};


//make this component available to the app
export default useDarkMode;
