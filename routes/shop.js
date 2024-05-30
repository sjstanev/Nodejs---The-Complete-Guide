const express = require('express');

const router = express.Router();

// add another middleware function 
router.get('/', (req, res, next) => {
    res.send('<h1> Hello from express</h1>');
});

// Now the router gets exported, so the router now has that route registered,
// because we export it here and this is the object on which we registered these routes
module.exports = router;
