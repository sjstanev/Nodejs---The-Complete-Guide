const http = require('http');

const express = require('express');

//create express application
const app = express();

// add new middleware function
app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allows tge requst to continue to the next middleware in line
})

// add another middleware function 
app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1> Hello from express</h1>')
})

// Start listener on specific port
app.listen(4000)

