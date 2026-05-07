const http = require('http');
const fs = require('fs');

const requestHandler = (req, res) => {

    console.log(req.url, req.method);

    // Home Page
    if (req.url === '/' && req.method === 'GET') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body>');
        res.write('<h2>Enter your details</h2>');

        res.write('<form action="/submit-details" method="POST">');

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

    // Handle Form Submission
    else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {

        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {

            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);

            const params = new URLSearchParams(fullBody);
            const bodyObject = Object.fromEntries(params);

            console.log(bodyObject);

            const userData = JSON.stringify(bodyObject) + "\n";

            fs.writeFileSync('user.txt', userData);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

        return;
    }

    // Default Page
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h2>Like Share Subscribe</h2></body>');
    res.write('</html>');
    res.end();
};



module.exports = userrequestHandler;