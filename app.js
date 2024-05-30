const http = require('http');
const fs = require('fs');

// Create a web server
const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);
    //process.exit() //hard exit event loop

    const url =req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</buttom></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url ==='/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

// Start listener on specific port
server.listen(4000)

