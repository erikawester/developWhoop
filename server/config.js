require('dotenv').config();

module.exports = {

    CLIENT_ID: process.env.CLIENT_ID, 
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REDIRECT_URI: 'http://localhost:3000/callback',
    AUTHORIZATION_URL: 'https://api.prod.whoop.com/oauth/oauth2/auth',
    TOKEN_URL: 'https://api.prod.whoop.com/oauth/oauth2/token',
    SCOPES: 'read:recovery read:cycles read:sleep read:workout read:profile read:body_measurement'
  };
  