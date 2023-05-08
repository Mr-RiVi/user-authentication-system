import { retrieveAllUsers, retrieveUser } from '../repository/users.js';

export const retrieveUserFromDB = async (id) => {
  return await retrieveUser(id);
};

export const retrieveAllUsersFromDB = async () => {
  try {
    const projection = { name: 1 };
    const result = await retrieveAllUsers();
    return result;
  } catch (error) {
    throw new Error(`Failed to retrieve all users: ${error.message}`);
  }
};
