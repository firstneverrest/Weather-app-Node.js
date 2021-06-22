const path = require('path');
const express = require('express');

// initialize application
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

// app.use() will find the files in the directory and show on webpage
app.use(express.static(publicDirectoryPath));

// app.get('/author', (req, res) => {
//   res.send({
//     name: 'First',
//     age: 21,
//   });
// });

// app.get('/about', (req, res) => {
//   res.send('About page');
// });

// app.get('/help', (req, res) => {
//   res.send('Page page');
// });

app.get('/weather', (req, res) => {
  res.send('Your weather');
});

// open web server in a specific port
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
