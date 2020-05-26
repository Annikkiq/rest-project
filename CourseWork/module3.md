# MongoDB

## What is MongoDB?

MongoDB is an open source document database, which means it stores data in JSON-like documents. Instead of using tables and rows as in relational databases, the MongoDB architecture is made up of collections and documents. 

## Installation

You can download MongoDB from [https://www.mongodb.com/]. Mongo can be also used in the cloud so you don't need to download it, but it's not free. 

After the installation you can open your command prompt and activate mongo:
```
sudo systemctl start mongod.service
```
Then open mongo shell:
```
mongo
```
### MongoDB fundamentals exercise

create a new database: 
```
use customers
```
create a new collection:
```
db.createCollection('customers')
```
create a new user: 
```
db.customers.insert({"first_name": 'John', "last_name": 'Doe'})
```
find customers: 
```
db.customers.find() 

returns { "_id" : ObjectId("5ecd3cd159c522de267da36c"), "first_name" : "John", "last_name" : "Doe" }
```
create many customers: 
```
db.customers.insertMany([{"first_name": 'Peel', "last_name": 'Banana'}, {"first_name": 'Orange', "last_name": 'Man', "gender": 'male'}])
```

update customer information: 
```
db.customers.update({"first_name": 'John'}, {$set:{"gender": 'male'}})
```


