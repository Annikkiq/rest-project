# Software-Development-Skills-Back-end
https://www.youtube.com/watch?v=avdw0KGT4bk&amp;feature=youtu.be

## Back-End-Skills

RESTful API project

## Getting Started

This is my rest api project for LUT University Software Development Skills: Back-End Anytime-course. 

### Installing

In this project I use express, nodemon, mongodb, mongoose and body-parser. It is recommended to install nodemon globally to your system path, so you can run it by calling it from within an npm script.

```
npm install express mongodb --save
```
```
npm install -g nodemon 
```
```
npm install mongoose body-parser
```

## Running the tests

I use mongodb shell to control and test my rest api. 

### More

I have database called "rest-project" in my mongo shell, with 2 collections (movies and genres). In following i will show some examples how to get things started.

To activate mongodb I run this command on my terminal.

```
sudo systemctl start mongod.service
```
Then I move into mongo shell

```
mongo
```
After that I switch to my project

```
use rest-project
```
Then Im all ready to code! To see the my project in live action, see my YouTube reference.
