const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

const port = 3003;

server.listen(port, () => {
    console.log(`server running on address http://localhost:${port}`);
});