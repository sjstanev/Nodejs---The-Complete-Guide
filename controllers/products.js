const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    // to be able to parse the content of the body
    // we import module `body-parser` and using middleware `bodyParser.urlencoded()`
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/')
};

exports.getProducts = (req, res, next) => {
    
    // we call fetchAll `static` method to get all data from products (Array)
    Product.fetchAll((products) => {

       // we use this object to send data to views/shop.ejs that must be render()
        res.render('shop', {
            pageTitle: 'Shop',
            prods: products,
            path: '/'
        }); 
    });
}
