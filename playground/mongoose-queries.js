const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

var id = '5b1b065d7a642a3207339a3711';

if(!ObjectID.isValid(id)){
  console.log('ID Invalid');
}

Todo.find({
  _id : id 
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id : id 
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('ID not found');
  }
  console.log('Todo By ID', todo);
}).catch((e) => {
  console.log(e);
});