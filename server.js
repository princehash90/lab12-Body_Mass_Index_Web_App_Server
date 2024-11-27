const express = require('express');// importing express library
const path = require('path');// will figure out location of pieces in the computer

const indexRouter = require('./routes/index');
const app = express();// creates the web server

const staticFileLocation = path.join(__dirname, 'public');// this where our static file are

app.use(express.static(staticFileLocation));//telling express the files are in this location
//telling webapp to use that location


app.set('views', path.join(__dirname, 'views'));// dirname will create the location of the views directory

app.set('view engine', 'hbs');//using handlebars to generate views

app.use('/', indexRouter)// all requests to the app be passed to indexRouter

//starting the server
const server =app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port ', server.address().port);
})

