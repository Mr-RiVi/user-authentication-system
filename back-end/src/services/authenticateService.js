import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

import {
  modifycredentials,
  retrieveAllUsersCredentials,
} from '../repository/credentials.js';

const authService = async (loginDetails) => {
  try {
    const foundUser = await retrieveAllUsersCredentials(
      {
        username: loginDetails.username,
      },
      { username: 1, password: 1 }
    );
    if (!foundUser || !foundUser.length > 0)
      return {
        success: false,
        status: 401,
        message: 'Username not recognized',
      }; //Unauthorized

    //evaluate password
    const match = await bcrypt.compare(
      loginDetails.password,
      foundUser.at(0).password
    );
    if (!match)
      return {
        success: false,
        status: 401,
        message: 'Password not recognized',
      };

    //if match-> create JWTs
    //create access token
    const accessToken = Jwt.sign(
      { username: foundUser.at(0).username }, //payload
      process.env.ACCESS_TOKEN_SECRET, //secretkey
      { expiresIn: '30s' } //options
    );

    //create refresh token
    const refreshToken = Jwt.sign(
      { username: foundUser.at(0).username }, //payload
      process.env.REFRESH_TOKEN_SECRET, //secretkey
      { expiresIn: '1d' } //options
    );

    //storing refresh token with current user
    const currentUser = await modifycredentials(foundUser.at(0)._id, {
      refreshToken: refreshToken,
    });

    return { success: true, data: { refreshToken, accessToken } };
  } catch (error) {
    return { success: false, status: 500, message: error.message }; //Internal Server Error
  }
};

export default authService;
