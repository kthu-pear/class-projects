const currentWeather = {
    temperature: 30,
    conditions: 'sunny',
};

console.log(currentWeather.temperature);
console.log(`The temperature is ${currentWeather.temperature} degrees C and the weather is ${currentWeather.conditions}.`)

// Challenge 1
// Refactor weather object
currentWeather['temperature'] = {high: 55, low:32};
currentWeather.astronomy = {
    sunrise: '7:43 AM',
    sunset: '5:09 PM',
};

console.log(currentWeather); // Check if object has matched challenge 1's example

console.log(currentWeather.temperature.high);
console.log(currentWeather.temperature.low);
console.log(currentWeather.conditions);
console.log(currentWeather.astronomy.sunrise);
console.log(`Today's highest temperature is ${currentWeather.temperature.high} and lowest temperature is ${currentWeather.temperature.low}. \nIt will be ${currentWeather.conditions}. \nThe sun rose at ${currentWeather.astronomy.sunrise} and will set at ${currentWeather.astronomy.sunset}`);
