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

## Web Server with Express
Express is a web framework for Node.js, make it easy to create web server. 
- Third party libraries
  - app.get() - send get request
  - res.send() - show HTML element or JSON on the webpage
  - app.listen() - open web server and listen on defined port 
- Built-in core node.js
  - Path
    - __dirname - get directory path (absolute path)
    - __filename - get file path (absolute path) 
    - path - you can use path in node.js to manage file path


### Dependencies
- postman-request - help node.js send HTTP request
- express - create RESTful API and web server
- nodemon - make web server no need to restart when update code.

### Tools
- weatherstack API
- mapbox API