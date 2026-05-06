const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>complete coding</title></head>');
        res.write('<body><h2>Welcome to Home Page</h2></body>');
        res.write('</html>');
        return res.end();
    } 
    
    else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>complete coding</title></head>');
        res.write('<body><h2>Checkout our product</h2></body>');
        res.write('</html>');
        return res.end();
    } 
    
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>complete coding</title></head>');
        res.write('<body><h2>Like Share Subscribe</h2></body>');
        res.write('</html>');
        res.end();
    }
});

const port = 3004;

server.listen(port, () => {
    console.log(`server running on address http://localhost:${port}`);
});