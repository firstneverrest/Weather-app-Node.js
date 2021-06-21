const request = require("postman-request");

// const weatherUrl =
//   "http://api.weatherstack.com/current?access_key=598ef13bdf9cb2d66807269ddcab0a4b&query=37.8267,-122.4233";

// request({ url: weatherUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("weatherstack: Unable to connect to weather service!");
//   } else if (error.body.error) {
//     console.log("weatherstack: Unable to find location. Try another location.");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degrees out." +
//         " It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });

const weather = (latitude, longitude, callback) => {
  const weatherUrl =
    "http://api.weatherstack.com/current?access_key=598ef13bdf9cb2d66807269ddcab0a4b&query=37.8267,-122.4233";

  request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
      callback(
        "weatherstack: Unable to connect to weather service!",
        undefined
      );
    } else if (error.body.error) {
      callback(
        "weatherstack: Unable to find location. Try another location.",
        undefined
      );
    } else {
      callback(
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degrees out." +
          " It feels like " +
          response.body.current.feelslike +
          " degrees out."
      );
    }
  });
};
