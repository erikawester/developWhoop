const express = require('express'); 
const session = require('express-session');
const path = require('path'); 
const routes = require('../server/routes/index'); 

const app = express(); 
const PORT = 3000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET, // Replace this with a real secret in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: !process.env.DEVELOPMENT } // Secure cookies in production
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
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    console.log(err.stack); 
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app; 