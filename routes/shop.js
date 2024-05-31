const express = require('express');

const adminData = require('./admin');

const router = express.Router();


// add another middleware function 
router.get('/', (req, res, next) => {
    
    //[ { title: 'first product' }, { title: 'testProduct' } ]
    const products = adminData.products;
    console.log(adminData.products);
    
    // we use this object to send data to views that must be render()
    res.render('shop', {
        pageTitle: 'Shop',
        prods: products,
        path: '/'
    }); 
});

// Now the router gets exported, so the router now has that route registered,
// because we export it here and this is the object on which we registered these routes
module.exports = router;
