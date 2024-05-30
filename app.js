const express = require('express');
const bodyParser = require('body-parser');

//create express application
const app = express();

// parse the requsted body
// use parameters `extended:false` to suspend the worning message:
// body-parser deprecated undefined extended: provide extended option app.js:8:20
app.use(bodyParser.urlencoded({extended: false}));

// add new middleware function
app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allows tge requst to continue to the next middleware in line
})

// add another middleware function 
app.use('/add-product', (req, res, next) => {
    res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</buttom></form></body>');
});

app.use('/product', (req, res, next) => {
    // to be able to parse the content of the body
    // we import module `body-parser` and using middleware `bodyParser.urlencoded()`
    console.log(req.body);
    res.redirect('/')
})

// add another middleware function 
app.use('/', (req, res, next) => {
    res.send('<h1> Hello from express</h1>');
});

// Start listener on specific port
app.listen(4000)

