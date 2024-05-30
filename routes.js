const fs = require('fs');

const requestHandler = (req, res) => {

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
    
        // Create Streams and buffers
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        });
        // This is async operation 
        return req.on('end', () => {
            // `Buffer` is Object globally available by node js
            const parseBody = Buffer.concat(body).toString();
            // message=<datainput>
            const message = parseBody.split('=')[1];
            // writeFileSync will block execution the next line of code until it finished
            // that why we use writeFile method
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler: requestHandler,
    text: 'Some hard coded text'
}

// or you can use 
// module.exports.handler = requestHandler;
// module.exports.text = 'Some coded text'
// or 
// exports.handler = requestHandler;
// exports.text = 'Some coded text'