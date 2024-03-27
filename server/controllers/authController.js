// controllers/authController.js

const axios = require('axios');
const querystring = require('querystring');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, AUTHORIZATION_URL, TOKEN_URL, SCOPES } = require('./config.js');

exports.authorize = (req, res) => {
  const params = {
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    response_type: 'code'
  };

  const authorizationUrl = `${AUTHORIZATION_URL}?${querystring.stringify(params)}`;
  res.redirect(authorizationUrl);
};

exports.callback = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    res.status(400).send('Authorization code not provided.');
    return;
  }

  try {
    const tokenResponse = await axios.post(TOKEN_URL, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code,
      grant_type: 'authorization_code'
    });

    const accessToken = tokenResponse.data.access_token;
    res.send(`Access token: ${accessToken}`);
  } catch (error) {
    console.error('Error exchanging authorization code for access token:', error.response.data);
    res.status(500).send('Error exchanging authorization code for access token.');
  }
};
