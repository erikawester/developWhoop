const axios = require("axios");
const crypto = require("crypto");
const querystring = require("querystring");
const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  AUTHORIZATION_URL,
  TOKEN_URL,
  SCOPES,
} = require("../config");

exports.welcome = (req, res) => {
  res.send(`Welcome to Erika's Whoop Stats!`);
};

exports.authorize = (req, res) => {
  const state = crypto.randomBytes(16).toString("hex");
  //store state in a session
  req.session.oauthState = state;

  const params = {
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    response_type: "code",
    state,
  };

  const authorizationUrl = `${AUTHORIZATION_URL}?${querystring.stringify(
    params
  )}`;

  res.redirect(authorizationUrl);
};

//handle callback from Whoop provider after user has authorized the application
exports.callback = async (req, res, next) => {
  const { code, state } = req.query;

  //verify state parameter
  if (!state || state !== req.session.oauthState) {
    const error = new Error("State parameter mismatch or missing");
    error.status = 400;
    return next(error);
  }

  //check if the auth code is present in the query parameters of the request
  if (!code) {
    const error = new Error("Authorization code not provided");
    error.status = 400;
    return next(error);
  }

  //send an HTTP POST request using Axios to the token URL of the auth server.
  try {
    const response = await axios.post(
      TOKEN_URL,
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code,
        grant_type: "authorization_code",
      },
      {
        //Whoop expects application/json
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const accessToken = response.data.access_token;
    res.locals.access_token = accessToken;
    return next();
    
  } catch (error) {
    const customError = new Error(
      "Error exchanging authorization code for access token: " +
        (error.response ? error.response.data : error.message)
    );
    customError.status = 500;
    return next(customError);
  }
};
