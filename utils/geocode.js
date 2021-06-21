// Geocoding
// input: address -> lat/long -> output: weather

const request = require("postman-request");

const geocode = (address, callback) => {
  const geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibmV2ZXJyZXN0IiwiYSI6ImNrcTRtYjUydjB1eDUyd212azA4Z2dmM2IifQ.khy_M242W6MKufitNCdKxw";

  request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("geocode: Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback(
        "geocode: Unable to find location. Try another location.",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
