import { retrieveAllUsers } from '../repository/users.js';

const authService = async (loginDetails) => {
  try {
    const foundUsername = await retrieveAllUsers();
  } catch (error) {
    return { success: false, status: 500, message: error.message }; //Internal Server Error
  }
};

export default authService;
