const path = require('path');

const errorControllor = require('./controllers/error')

const express = require('express');
const bodyParser = require('body-parser');
//create express application
const app = express();

// here tell express which engine to use to render the html templates
app.set('view engine', 'ejs');
// where to find this templates
app.set('views', 'views');

// Now the router gets exported, so the router now has these two routes registered,
// because we export it here and this is the object on which we registered these routes'
// adminRoutes and showRoutes are Middleware function also
const adminRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// parse the requsted body
// use parameters `extended:false` to suspend the worning message:
// body-parser deprecated undefined extended: provide extended option app.js:8:20
app.use(bodyParser.urlencoded({ extended: false }));
// we use this `static` method to give public access to files in the server
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute.routes);
app.use(shopRoutes);

app.use(errorControllor.get404);

// Start listener on specific port
app.listen(4000);


