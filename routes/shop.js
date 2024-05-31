const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');


const router = express.Router();

// add another middleware function 
router.get('/', (req, res, next) => {
    console.log(adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))

});

// Now the router gets exported, so the router now has that route registered,
// because we export it here and this is the object on which we registered these routes
module.exports = router;
