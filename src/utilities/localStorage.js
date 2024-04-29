/* eslint-disable no-unused-vars */

// checking is data available in localStorage
const getThemeData = () =>{
    const storedString = localStorage.getItem('theme');
    if(storedString){
        return JSON.parse(storedString);
    }
    return []
}

//saving theme data to local storage
const addThemeData = (data) =>{
    const dataTheme = getThemeData();
    dataTheme.push(data);
    //save to local storage
    const dataStringified = JSON.stringify(dataTheme);
    localStorage.setItem('theme', dataStringified);
}

//remove from local storage
const removeFromLocalStorage = () =>{
    localStorage.setItem('theme', '');
}

export {getThemeData, addThemeData, removeFromLocalStorage}