# Weather application

![image](server/public/img/weather-application-thumbnail.jpg)

The weather application is a weather forecast web application using node.js application and express framework. It uses weather data from mapbox and weatherstack. After I had finished my project, I deployed up to Heroku which help deploying node.js and other backend application. You can find the weather of the location by fill up the search bar at the first page. Next, press enter or click search button. Then, the weather data of that location will appear in the box.

### Technologies

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## How does asynchronous works

1. Call Stack - data structure provided by V8 JavaScript engine, use to keep track the execution of the program.
2. Node APIs - when asynchronous function is used, it will come to this Node APIs and not block the other works.
3. Callback Queue - when the asynchronous function is ready to executed, it will come to the callback queue to execute.

**Tips:** setTimeout() is not default provided in JavaScript or V8 but Node.js use C++ to create this function.

## Make HTTP request

1. Use [weatherstack API](https://weatherstack.com/) to send request for weather information. These following are steps to use weatherstack API
2. Use _request_ npm package to make HTTP request but now it's deprecated, you can use the _postman-request_ instead.
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
    - \_\_dirname - get directory path (absolute path)
    - \_\_filename - get file path (absolute path)
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

when the user go to undefined path, you should display something on the screen. You can simply do that by using wildcard character (\*)

```javascript
app.get('*', (req, res) => {
  res.send('My 404 page');
});
```

## Icon

you can use `<link rel="icon" href="/img/weather.png">` to add icon in front of the title of your website

## Query string

Query string is a additional request from user to specify output that they want. For example, /products?rating=5&price=100. As a server, you can get the query string by referring to req.query.

## Heroku

Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications in the cloud. In this project, we can use heroku to host our node.js application.

1. sign up for heroku for free.
2. install heroku CLI
3. check heroku version by `heroku -v`
4. use `heroku login` to enable cli
5. setup Secure Shell (SSH) to securely share your code to third-party services.
6. `heroku keys:add`
7. `heroku create PROJECT_NAME`
8. add `"start": "node server/src/app.js"` in package.json file
9. change app.listen() on port 3000 in app.js to another one that compatible with Heroku
10. `git push heroku master` to deploy up to Heroku repository

### Connect Heroku to GitHub

When create an application, you can connect Heroku to Github to deploy automatically after pushing your new code in the repository.
During deploying the app, you can display log in your terminal with `heroku logs --tail --app <YOUR_HEROKU_APP_NAME>` command.

## Dependencies

- postman-request - help node.js send HTTP request
- express - create RESTful API and web server
- nodemon - make web server no need to restart when update code.
- hbs - integrate handlebars to express

## Tools

- weatherstack API
- mapbox API
- Heroku
