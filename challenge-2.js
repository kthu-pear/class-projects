var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

// Select date by key
const dateSelector = {
    today: 0,
    Saturday: 1,
    Sunday: 2,
}

console.log(weatherForecast[dateSelector.today].conditions);
console.log(weatherForecast[dateSelector.Saturday].temperature.high);
console.log(weatherForecast[dateSelector.Saturday].astronomy.sunrise);
console.log(weatherForecast[dateSelector.Sunday].conditions);
console.log(weatherForecast[dateSelector.Sunday].astronomy.sunset);

const sunday = weatherForecast[dateSelector.Sunday];
console.log(`The high on ${sunday.day} will be ${sunday.temperature.high} and the low will be ${sunday.temperature.low}. \nWe're predicting a ${sunday.conditions}. \nThe sun will rise at ${sunday.astronomy.sunrise} and set at ${sunday.astronomy.sunset}.`)