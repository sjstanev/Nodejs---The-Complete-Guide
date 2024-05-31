const path = require('path');
const rootDir = require('../util/path')

const express = require('express');

const router = express.Router();

const products = [];

// this route is recheable to /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
});

// path is: /admin/add-product, we can use the same name 
// because we have different request methods: GET and POST
router.post('/add-product', (req, res, next) => {
    // to be able to parse the content of the body
    // we import module `body-parser` and using middleware `bodyParser.urlencoded()`
    products.push({title: req.body.title});
    res.redirect('/')
})
// Now the router gets exported, so the router now has these two routes registered,
// because we export it here and this is the object on which we registered these routes
exports.routes = router;

// also export products 
exports.products = products;