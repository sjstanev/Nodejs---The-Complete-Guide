const http = require('http');

const express = require('express');

//create express application
const app = express();

// `app` is valid request server 
const server = http.createServer(app);

// Start listener on specific port
server.listen(4000)

