import Jwt from 'jsonwebtoken';

//This middleware function verifies the access token.
//It checks the authorization header for a JWT Bearer token, and then decodes and verifies the token using the
//ACCESS_TOKEN_SECRET from the environment variable.
//if the token is valid this function adds the custom properties called username and roles to the req object
const verifyJWT = (req, res, next) => {
  //get the authorization header property from request. this can be in the form of either 'authorization' or 'Authorization'
  const authHeader = req.headers.authorization || req.header.Authorization;

  //if the authorization header not start with "Bearer" send response with 401 Unauthorized status
  if (!authHeader?.startsWith('Bearer')) res.sendStatus(401);

  //get token from authorization header
  const token = authHeader.split(' ')[1];

  //verifies the token using the ACCESS_TOKEN_SECRET from the environment variable.
  Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    //if there is an error verifing the token send a 403 Forbidden response
    if (error) return res.sendStatus(403); //invalid token

    //ading custom properties called username and roles to the req object based on the decoded information in the token.
    req.username = decoded.username;
    // req.roles = decoded.UserInfo.roles;
    next();
  });
};

export default verifyJWT;
