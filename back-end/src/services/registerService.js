import bcrypt from 'bcrypt';
import { createUser, retrieveAllUsers } from '../repository/users.js';

const registerService = async (registerDetails) => {
  try {
    // check for duplicate usernames in the db
    const duplicate = await retrieveAllUsers({}, { credentialsId: 1 });
    const isDuplicate = duplicate.some((user) => {
      return user.credentialsId.username === registerDetails.username;
    });
    if (isDuplicate) return { success: false, status: 409 }; //Conflict

    //encryp the password
    const hashedPassword = await bcrypt.hash(registerDetails.password, 10);

    //create new user
    const response = await createUser({
      name: registerDetails.name,
      username: registerDetails.username,
      email: registerDetails.email,
      password: hashedPassword,
    });

    return {
      success: true,
      status: 201,
      message: 'New user created',
      data: response,
    }; //Created success status
  } catch (error) {
    return { success: false, status: 500, message: error.message }; //Internal Server Error
  }
};

export default registerService;
