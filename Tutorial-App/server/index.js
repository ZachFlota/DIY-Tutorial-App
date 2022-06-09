const path = require('path');
const express = require('express');
const methodOverride = require('method-override')


const PORT = process.env.PORT || 3001;

const app = express();

//Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.use('/tutorials', require('./controllers/tutorials.js'))


//Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

//All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})


//Listening on
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});