// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server.');
  }
  console.log('Connected to MongoDb Server.');
const db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new Doc into Users Collection (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Julien',
  //   age: 22,
  //   location: 'California'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert document', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  client.close();
});