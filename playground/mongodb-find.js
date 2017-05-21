const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
      return console.log('Unable to connect ot mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Failed to get todos');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (error) => {
  //   console.log('Failed to get todos');
  // });

  var users = db.collection('Users').find({name: 'Fima'}).toArray().then((docs) =>{
    console.log(JSON.stringify(docs, undefined, 2));
    return JSON.stringify(docs, undefined, 2);
  }, (error) => {
    console.log('Failed to get todos', error);
  });

  var countNum = db.collection('Users').find({name: 'Fima'}).count().then((count) => {
    console.log(count);
    return count;
  }, (error) => {
    console.log('Failed to get count', error);
  });

  console.log(`${countNum} users were found, \n ${users}`);

  // db.close();
});
