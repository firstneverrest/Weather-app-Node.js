const geocode = require("./utils/geocode");
const weatherForecast = require("./utils/weatherForecast");

// receive the address from user input
const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log("Geocode Error: " + error);
    }
    weatherForecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log("WeatherForecast Error: " + error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
