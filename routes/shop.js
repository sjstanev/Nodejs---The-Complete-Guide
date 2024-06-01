const express = require('express');

const adminData = require('./admin');

const productsControllor = require('../controllers/products')

const router = express.Router();


// add another middleware function 
router.get('/', productsControllor.getProducts);

// Now the router gets exported, so the router now has that route registered,
// because we export it here and this is the object on which we registered these routes
module.exports = router;
