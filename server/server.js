const express = require('express'); 
const session = require('express-session');
const path = require('path'); 
const routes = require('../server/routes/index'); 

const app = express(); 
const PORT = 3000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: !process.env.DEVELOPMENT } 
  }));

//bring us to routes folder
app.use('/', routes); 

// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred', detail: err.message },
    };
    //merge incoming error obj with default error obj
    const errorObj = Object.assign({}, defaultErr, err);
    //for bugging purpose - log the stack trace
    console.log(errorObj.log);
    console.log(err.stack); 
    //respond with error status and error message object
    return res.status(errorObj.status).json(errorObj.message);
  });

//catch all
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    return next(error);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app; 