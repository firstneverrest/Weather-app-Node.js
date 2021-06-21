const request = require("postman-request");
const geocode = require("./utils/geocode");

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

weather(37.8267, -122.4233, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

// geocode("Philadelphia", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });
