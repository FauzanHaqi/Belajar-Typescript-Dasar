"use strict";
function getData(value) {
    return value;
}
console.log(getData("Haqi").length);
console.log(getData(134).length);
// Generic 
function myData(value) {
    return value;
}
console.log(myData("Haqi").length);
console.log(myData(134));
// Dalam Arrow function  
const arrowFunc = (value) => {
};
