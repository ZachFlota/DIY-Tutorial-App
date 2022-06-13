//const path = require('path');
const express = require('express');
let mongoose = require('mongoose');
//const methodOverride = require('method-override');
let cors = require('cors');
let bodyParser = require('body-parser');
const tutorialRoute = require('../server/controllers/tutorials')

mongoose
  .connect('mongodb://localhost:27017/how-to')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

app.use('/tutorials', tutorialRoute)

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log('Connected to port ' + PORT)
})

//Error Handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

//Old Code below

//Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

//app.use(express.urlencoded({ extended: true }))
//app.use(methodOverride('_method'))


//app.use('/tutorials', require('./controllers/tutorials.js'))


//Handle GET requests to /api route
//app.get("/api", (req, res) => {
    //res.json({ message: "Hello from server!" });
//});

//All other GET requests not handled before will return our React app
//app.get('*', (req, res) => {
    //res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//})


//Listening on
//app.listen(PORT, () => {
  //console.log(`Server listening on ${PORT}`);
//});