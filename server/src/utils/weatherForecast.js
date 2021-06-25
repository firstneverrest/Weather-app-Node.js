// weatherstack receive longitude and latitude to forecast the weather
// in that area.

const request = require("postman-request");

const weatherForecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=598ef13bdf9cb2d66807269ddcab0a4b&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(
        "weatherstack: Unable to connect to weather service!",
        undefined
      );
    } else if (body.error) {
      callback(
        "weatherstack: Unable to find location. Try another location.",
        undefined
      );
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees Celsius out." +
          " It feels like " +
          body.current.feelslike +
          " degrees Celsius out."
      );
    }
  });
};

module.exports = weatherForecast;
