import User from '../models/user.js';
import Credential from '../models/credentials.js';

export const createUser = async (user) => {
  const { name, username, email, password } = user;
  try {
    const credentialCreate = await new Credential({
      username,
      password,
    }).save();
    const userCreate = await new User({
      name,
      email,
      credentialsId: credentialCreate._id,
    }).save();
    return userCreate;
  } catch (error) {
    throw new Error(`Faild to create user:${error.message}`);
  }
};

export const retrieveUser = async (id, projection) => {
  try {
    const user = await User.findById(id, projection);
    if (!user) throw new Error('No user found for the given ID');
    return user;
  } catch (error) {
    throw new Error(`Faild to retrieve user:${error.message}`);
  }
};

export const retrieveAllUsers = async (queryObject, projection) => {
  try {
    const users = await User.find(queryObject, projection).populate(
      'credentialsId'
    );
    if (!users) throw new Error('No users found');
    return users;
  } catch (error) {
    throw new Error(`Failed to retrieve users: ${error.message}`);
  }
};
