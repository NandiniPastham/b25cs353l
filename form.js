const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    res.writeHead(200, { "Content-Type": "text/html" });

    // Process URL
    if (parsedUrl.pathname === "/") {
        res.write("<h1>Node.js URL Processing</h1>");
        res.write("<p>Use /hello?name=John</p>");
        res.write('<form action="/submit" method="GET">');
        res.write('Name: <input type="text" name="name"><br><br>');
        res.write('Age: <input type="text" name="age"><br><br>');
        res.write('<input type="submit" value="Submit">');
        res.write("</form>");
        res.end();
    }

    // Process Query String
    else if (parsedUrl.pathname === "/hello") {
        const name = parsedUrl.query.name;

        res.write("<h1>Query String</h1>");
        res.write("<p>Hello " + name + "</p>");
        res.end();
    }

    // Process Form Parameters
    else if (parsedUrl.pathname === "/submit") {
        const name = parsedUrl.query.name;
        const age = parsedUrl.query.age;

        res.write("<h1>Form Parameters</h1>");
        res.write("<p>Name: " + name + "</p>");
        res.write("<p>Age: " + age + "</p>");
        res.end();
    }

    else {
        res.writeHead(404);
        res.write("<h1>404 - Page Not Found</h1>");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
