const express = require('express'); 
const path = require('path'); 
const routes = require('./routes'); 

const app = express(); 
const PORT = 3000; 

app.use(express.json()); 
app.use(express.urlencoded());

//bring us to routes folder
app.use('/', routes); 

// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app; 