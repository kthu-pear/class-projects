var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

// Find the first high temperature
console.log(highTemperatures[0]);

// Find the last low temperature
console.log(lowTemperatures[lowTemperatures.length - 1]);

// Find the average high temperature
let sumHigh = 0;
for (let temp of highTemperatures) {
    sumHigh += temp;
};
console.log(sumHigh/highTemperatures.length);

// Find the average low temperature
let sumLow = 0;
for (let temp of lowTemperatures) {
    sumLow += temp
};
console.log((sumLow/lowTemperatures.length).toFixed(0));