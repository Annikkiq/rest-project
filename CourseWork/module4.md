# Express

## What is Express?

ExpressJS is a minimalist, open source web framework for Node.js. It is used for building web applications and APIs. Many popular frameworks are based on Express [https://expressjs.com/en/resources/frameworks.html].

## Installation

Before you install Express you need to have Node.js. After that you can install express to your package.json file:
```
npm install express --save
```
Then you have to import express module to your project and create an express application. This object, which is traditionally named *app*, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves:
```
const express = require("express");
const app = express();
```
After this you can test your code by adding this simple GET method:
```
app.get('/', function(req, res) {
  res.send('Hello World!');
});
```
Don't forget to set a port and listen the server: 
```
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
```

## Express exercise
The video and source code that had been linked for exercise is outdated. I watched the video and coded along, replacing the old ES5 syntax with ES6 syntax. The updates made breaking changes to the code, so i just forked the original repository.

Here's an example of an old syntax:
```
app.use(function(req, res, next){
  res.locals.errors = null;
  next();
});
```
replacing whit arrow function:
```
app.use((req, res, next) => {
  res.locals.errors = null;
  next();
});
```

