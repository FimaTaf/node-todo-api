// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Fima', age: 26};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
      return console.log('Unable to connect ot mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed : false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Failed to insert todo.', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    "name" : "Fima",
    "age" : 26,
    "location" : "Israshit"
  }, (error, result) => {
    if (error) {
      return console.log('Failed to insert a todo', error);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  })
  db.close();
});
