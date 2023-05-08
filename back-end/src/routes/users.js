import express from 'express';
import registerHandler from '../controllers/registerController.js';
import {
  retrieveAllUsersHandler,
  retrieveUserHandler,
} from '../controllers/userController.js';

const users_router = express.Router();

users_router.post('/register', registerHandler);
users_router.get('/retrieve-user/:id', retrieveUserHandler);
users_router.get('/retrieve-users', retrieveAllUsersHandler);
// users_router.put('/modify-users', registerHandler);
// users_router.delete('/remove-users', registerHandler);

export default users_router;
