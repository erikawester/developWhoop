
//considered using axios vs fetch
//but with axios you can write less error handling, 
//I think it's less likely to run into errors and I think the code is cleaner
const axios = require('axios');
const crypto = require('crypto'); 

const querystring = require('querystring');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, AUTHORIZATION_URL, TOKEN_URL, SCOPES } = require('../config');

exports.authorize = (req, res) => {

  //generate 32-character hexadecimal string
  const state = crypto.randomBytes(16).toString('hex'); 
  //storing state in the session
  req.session.oauthState = state; 

  const params = {
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    response_type: 'code',
    state,
  };

  const authorizationUrl = `${AUTHORIZATION_URL}?${querystring.stringify(params)}`;
  res.redirect(authorizationUrl);
};

exports.welcome = (req, res) => {
  res.send(`Welcome to Erika's Whoop Stats!`);
};

//wait for the network request to complete
exports.callback = async (req, res) => {
  const { code, state } = req.query;
  
  //verify state parameter
  if (!state || state !== req.session.oauthState) {
    return res.status(400).send('State parameter mismatch or missing');
  }

  //is the auth code present in the query parameters of the request? 
  if (!code) {
    res.status(400).send('Authorization code not provided.');
    return;
  }
  //send an HTTP POST request using Axios to the token URL of the auth server. 
  try {
    //axios.post is method used to make post request
    const response = await axios.post(TOKEN_URL, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code,
      grant_type: 'authorization_code',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
//upon successful completion of request, the response from the auth server should 
//include access token. Extract this token from response and send it back to client
    const accessToken = response.data.access_token;
    res.send(`Access token: ${accessToken}`);

  } catch (error) {
    //error handling
    console.error('Error exchanging authorization code for access token:', error.response ? error.response.data : error.message);
    res.status(500).send('Error exchanging authorization code for access token.');
  }
};