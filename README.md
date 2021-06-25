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
  - express
    - app.get() - send get request
    - res.send() - show HTML element or JSON on the webpage
    - app.listen() - open web server and listen on defined port 
    - app.use(express.static(PATH)) - use the static file in the defined path such as index.html or css files
- Built-in core node.js
  - Path
    - __dirname - get directory path (absolute path)
    - __filename - get file path (absolute path) 
    - path - you can use path in node.js to manage file path

## Dynamic page with templating
if you would like to create a template for pages, you can use handlebars third-party packages. However, handlebars cannot use with express. So, we have an another package that can apply handlebars in express called "hbs"
- handlebars - create templating language
- hbs - integrate handlebars to express
you can also change the name of the views folder to your desired name, can use path.join to point your new views folder location.

### The process of how to create dynamic page
- create views folder and create index.hbs file
- `app.set('view engine', 'hbs');` in app.js
- you can delete the index.html in public folder
- use app.get() and res.render() to send dynamic data to the html files 
- then, in index.hbs file, you can use {{DATA}} to display data as a prop from app.js

Tips: you can delete the html files in public folder and create new html files in views folder like index.html -> index.hbs.

## Put header and footer in template
create partial folder and use `hbs.registerPartial(partialsPath);` to set as a partial template. In the partial folder, create header.hbs or other name and include {{>header}} in hbs file to use partial template.

Tip: add -e js,hbs after nodemon command to make nodemon restart when hbs change like js file.

## 404 page
when the user go to undefined path, you should display something on the screen. You can simply do that by using wildcard character (*)
```javascript
app.get('*', (req, res) => {
  res.send('My 404 page');
});
```

## Icon
you can use `<link rel="icon" href="/img/weather.png">` to add icon in front of the title of your website

## Query string
Query string is a additional request from user to specify output that they want. For example, /products?rating=5&price=100. As a server, you can get the query string by referring to req.query.

## Dependencies
- postman-request - help node.js send HTTP request
- express - create RESTful API and web server
- nodemon - make web server no need to restart when update code.
- hbs - integrate handlebars to express 

## Tools
- weatherstack API
- mapbox API