# Weather application

## How does asynchronous works
1. Call Stack - data structure provided by V8 JavaScript engine, use to keep track the execution of the program.
2. Node APIs - when asynchronous function is used, it will come to this Node APIs and not block the other works.
3. Callback Queue - when the asynchronous function is ready to executed, it will come to the callback queue to execute.

**Tips:** setTimeout() is not default provided in JavaScript or V8 but Node.js use C++ to create this function.

## Make HTTP request
1. Use [weatherstack API](https://weatherstack.com/) to send request for weather information. These following are steps to use weatherstack API
2. Use *request* npm package to make HTTP request but now it's deprecated, you can use the *postman-request* instead.
3. Make get request to weatherstack API by send latitude and longitude.

## Geocoding
We can receive address from the user and transfer to weather data of that address. We can use [mapbox](https://www.mapbox.com/) to use their API. 
1. Sign up mapbox account and go to tokens section
2. You can use access tokens to send API
3. In API documentation, go to [Geocoding](https://docs.mapbox.com/api/search/geocoding/) section and forward geocoding is what we will use.
   1. forward geocoding - convert from address to lat/long
   2. reverse geocoding - convert from lat/long to address

## 
