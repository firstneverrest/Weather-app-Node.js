const path = require('path');
const express = require('express');
const hbs = require('hbs');

// initialize application
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather Forecast',
    name: 'Chitsanupong',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Chitsanupong',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'Weather Forecast',
    name: 'Chitsanupong',
  });
});

// app.get('/author', (req, res) => {
//   res.send({
//     name: 'First',
//     age: 21,
//   });
// });

app.get('/weather', (req, res) => {
  res.send('Your weather');
});

// open web server in a specific port
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
