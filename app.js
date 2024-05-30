const path = require('path');

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
// we use this `static` method to give public access to files in the server
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

// Start listener on specific port
app.listen(4000);


