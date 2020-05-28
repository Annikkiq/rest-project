# MongoDB

## What is MongoDB?

MongoDB is an open source document database, which means it stores data in JSON-like documents. Instead of using tables and rows as in relational databases, the MongoDB architecture is made up of collections and documents. 

## Installation

You can download MongoDB from [https://www.mongodb.com/]. Mongo can also be used in the cloud so you don't need to download it, but it's not free. 

After the installation you can open your command prompt and activate mongo:
```
sudo systemctl start mongod.service
```
Then open mongo shell:
```
mongo
```
### Common MongoDB commands
* *Show databases* = show dbs
* *Switch to database* = use "database name"
* *Show database you are in currently* = db
* *Show collections* = show collections
* *Find document in the collection* = db."collection".find()
* *Insert document to collection* = db."collection".insertOne() OR db."collection".insertMany()
* *Update document in the collection* = db."collection".updateOne() OR db."collection".updateMany()
* *Delete document from the collection* = db."collection".deleteOne() OR db."collection".deleteMany()
* *Help* = db.help()

## MongoDB fundamentals exercise

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
setting the age for the customer:
```
db.customers.update({"first_name": 'Peel'}, {$set:{"age": 45}})
```
incrementing customers age:
```
db.customers.update({"first_name": 'Peel'}, {$inc:{age: 5}})
```
unset the customers age:
```
db.customers.update({"first_name": 'Peel'}, {$unset:{age:1}})
```
upsert the customer:
```
db.customers.update({"first_name": 'Apple'}, {"first_name": 'Apple', "last_name": 'Pie'}, {upsert: true}
```
renaming the customer:
```
db.customers.update({"first_name": 'John'}, {$rename:{"gender": 'sex'}})
```
deleting a customer:
```
db.customers.deleteOne({"first_name": 'John'})
```
finding many customers whit or operator:
```
db.customers.find({$or:[{"first_name": 'Snow'}, {"first_name": 'Kiwi'}]})
```
using lesser than:
```
db.customers.find({age:{$lt:'30'}})
```
sorting customers by last name:
```
db.customers.find().sort({"last_name": 1}).pretty()
```
counting customers:
```
db.customers.find().count()
```
limiting result data:
```
db.customers.find().limit(4)
```
finding and listing customers by their first name, using forEach:
```
db.customers.find().forEach(function(doc){print("Customer Name: "+doc.first_name)})

result:
Customer Name: Peel
Customer Name: Orange
Customer Name: Apple
Customer Name: Kiwi
Customer Name: Passion
Customer Name: Cherry
Customer Name: Grape
Customer Name: Snow
```
at the end here's my customers:
```
db.customers.find().pretty()
{
	"_id" : ObjectId("5ecd3db959c522de267da36d"),
	"first_name" : "Peel",
	"last_name" : "Banana"
}
{
	"_id" : ObjectId("5ecd3db959c522de267da36e"),
	"first_name" : "Orange",
	"last_name" : "Man",
	"gender" : "male"
}
{
	"_id" : ObjectId("5ecdffb6f01084029920198d"),
	"first_name" : "Apple",
	"last_name" : "Pie"
}
{
	"_id" : ObjectId("5ece0ae4a682b33fb3552441"),
	"first_name" : "Kiwi",
	"last_name" : "Green",
	"gender" : "male",
	"age" : "32",
	"address" : {
		"street" : "423 Essex",
		"city" : "Lawrence",
		"state" : "LA"
	},
	"memberships" : [
		"mem1",
		"mem2"
	],
	"balance" : "123.65"
}
{
	"_id" : ObjectId("5ece0ae4a682b33fb3552442"),
	"first_name" : "Passion",
	"last_name" : "Fruit",
	"gender" : "female",
	"age" : "54",
	"address" : {
		"street" : "67 lane",
		"city" : "Garden",
		"state" : "Utah"
	},
	"memberships" : [
		"mem3",
		"mem4"
	],
	"balance" : "34.78"
}
{
	"_id" : ObjectId("5ece0ae4a682b33fb3552443"),
	"first_name" : "Cherry",
	"last_name" : "Red",
	"gender" : "female",
	"age" : "30",
	"address" : {
		"street" : "25th street",
		"city" : "Flower",
		"state" : "Nevada"
	},
	"memberships" : [
		"mem2"
	],
	"balance" : "435.60"
}
{
	"_id" : ObjectId("5ece0ae4a682b33fb3552444"),
	"first_name" : "Grape",
	"last_name" : "Tree",
	"gender" : "male",
	"age" : "22",
	"address" : {
		"street" : "137 street",
		"city" : "New York",
		"state" : "NY"
	},
	"memberships" : [
		"mem1",
		"mem3"
	],
	"balance" : "795"
}
{
	"_id" : ObjectId("5ece0ae4a682b33fb3552445"),
	"first_name" : "Snow",
	"last_name" : "Flake",
	"gender" : "male",
	"age" : "27",
	"address" : {
		"street" : "534 north",
		"city" : "Icecity",
		"state" : "Alaska"
	},
	"memberships" : [
		"mem4"
	],
	"balance" : "50.45"
}

```


