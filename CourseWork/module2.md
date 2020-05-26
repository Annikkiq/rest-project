# Node.js 

## What is Node.js and how does it work?

Node is JavaScript runtime built on Chrome's V8 JavaScript Engine and it is used to build web applications such as REST APIs, chats, games, blogs, social applications etc.

### What is npm? 

Npm is Node.js package manager that can be used to install node programs/modules.

## Installation

You can download node.js to your computer from [https://nodejs.org/en/]. 

After the installation you can navigate to your project folder and install package.json file which will hold all your dependencies and general information about your project. 

```
npm init
```
### Basic webserver exercise

package.json file:

```
{
  "name": "course-exercises",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Annika",
  "license": "ISC"
}
```
app.js file:
```
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
    if(err) {
        throw err;
    }
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    server.listen(port, hostname, () => {
        console.log('Server started on port' +port);
    });
});
```
And index.html file: 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise</title>
</head>
<body>
    <h1>Hello there</h1>
</body>
</html>
```