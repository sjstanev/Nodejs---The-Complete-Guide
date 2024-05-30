const express = require('express');
const bodyParser = require('body-parser');
//create express application
const app = express();

// Now the router gets exported, so the router now has these two routes registered,
// because we export it here and this is the object on which we registered these routes'
// adminRoutes and showRoutes are Middleware function also
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// parse the requsted body
// use parameters `extended:false` to suspend the worning message:
// body-parser deprecated undefined extended: provide extended option app.js:8:20
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page not found</h1>');
})

// Start listener on specific port
app.listen(4000);


