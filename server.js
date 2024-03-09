const app = require('./app');
const mongoose = require('mongoose');
require('colors');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful'.bgBrightGreen);
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

// DB_HOST ='mongodb+srv://user-butbucket:LgLLCtgp2oYk69pj@cluster0.4dvwoew.mongodb.net/db-test?retryWrites=true&w=majority'
// PORT = 3000
