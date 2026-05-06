const http = require('http');
const fs =require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Home Page (Form)
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body>');
        res.write('<h2>Enter your details</h2>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<form method="POST" action="/submit">');

        res.write('<label>Name:</label>');
        res.write('<input type="text" name="username" placeholder="Enter your Name"><br><br>');

        res.write('<label>Email:</label>');
        res.write('<input type="email" name="email" placeholder="Enter Email"><br><br>');

        res.write('<label>Male</label>');
        res.write('<input type="radio" name="gender" value="male">');

        res.write('<label>Female</label>');
        res.write('<input type="radio" name="gender" value="female"><br><br>');

        res.write('<input type="submit" value="Submit">');

        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

  

    // Default Page
    else if(req.url.toLowerCase === "/submit-details"&& req.method == "POST"){

       
        fs.writeFileSync('user.txt','prashant Jain ');

        res.statusCode=302;
        res.setHeader('Location', '/');
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h2>like share subscribe</h2></body>');
    res.write('</html>');
    res.end();
});

const port = 3004;

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});