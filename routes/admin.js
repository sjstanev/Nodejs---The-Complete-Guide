const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</buttom></form></body>');
});

router.post('/product', (req, res, next) => {
    // to be able to parse the content of the body
    // we import module `body-parser` and using middleware `bodyParser.urlencoded()`
    console.log(req.body);
    res.redirect('/')
})
// Now the router gets exported, so the router now has these two routes registered,
// because we export it here and this is the object on which we registered these routes
module.exports = router;
