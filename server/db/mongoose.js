const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', () => {
  console.log('Connected to Database');
});

module.exports = {mongoose};