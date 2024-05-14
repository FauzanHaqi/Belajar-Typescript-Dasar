function getData(value: any) {
  return value;
}

console.log(getData("Haqi").length);
console.log(getData(134).length);

// Generic 
function myData <T>(value: T) {
    return value
}

console.log(myData("Haqi").length);
console.log(myData(134));

// Dalam Arrow function  
const arrowFunc = <T> (value: T) => {
}