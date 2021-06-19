const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=598ef13bdf9cb2d66807269ddcab0a4b&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("data:", response.body.current);
});
