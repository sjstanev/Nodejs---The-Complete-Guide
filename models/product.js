const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename), // path 
    'data', // this is folder
    'products.json' // this is the file where the data will be saved
); 

const getProductsFromFile = cb => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent)); 
    });
}

// Create Class Product
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    // we can push `this` (created obj) object to array
    // this mean just object created by this class and then we added to the products array
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        });
    }

    // `STATIC` means that when we can call `fetchAll` method directly on the class itself and not 
    // on  instantiated object
    static fetchAll(cb) {
        getProductsFromFile(cb);
    } 

}