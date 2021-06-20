const request = require("postman-request");

const weatherUrl =
  "http://api.weatherstack.com/current?access_key=598ef13bdf9cb2d66807269ddcab0a4b&query=37.8267,-122.4233";

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log("weatherstack: Unable to connect to weather service!");
  } else if (error.body.error) {
    console.log("weatherstack: Unable to find location. Try another location.");
  } else {
    console.log(
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

// Geocoding
// input: address -> lat/long -> output: weather
const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmV2ZXJyZXN0IiwiYSI6ImNrcTRtYjUydjB1eDUyd212azA4Z2dmM2IifQ.khy_M242W6MKufitNCdKxw";

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log("geocode: Unable to connect to location services");
  } else if (response.body.features.length === 0) {
    console.log("geocode: Unable to find location. Try another location.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log("latitude: " + latitude + ", longitude: " + longitude);
  }
});
