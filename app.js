const http = require('http');

// import module routes.js that return module.exports = requestHandler;
const routes = require('./routes')

console.log(routes.text);

// Execute routes funtion for all incoming requests
const server = http.createServer(routes.handler);

// Start listener on specific port
server.listen(4000)

