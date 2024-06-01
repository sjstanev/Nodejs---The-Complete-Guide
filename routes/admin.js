const path = require('path');

const express = require('express');

const productsControllor = require('../controllers/products')

const router = express.Router();

// this route is recheable to /admin/add-product => GET
router.get('/add-product', productsControllor.getAddProduct);

// path is: /admin/add-product, we can use the same name 
// because we have different request methods: GET and POST
router.post('/add-product', productsControllor.postAddProduct)


// Now the router gets exported, so the router now has these two routes registered,
// because we export it here and this is the object on which we registered these routes
exports.routes = router;

// also export products 
// exports.products = products;