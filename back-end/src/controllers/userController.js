import {
  retrieveAllUsersFromDB,
  retrieveUserFromDB,
} from '../services/userAccounts.js';

export const retrieveUserHandler = async (req, res) => {
  try {
    const retrievedUser = await retrieveUserFromDB(req.params.id);
    res.send(retrievedUser);
  } catch (error) {
    res.status(404).send({ error: 'No document found for the given ID' });
  }
};

export const retrieveAllUsersHandler = async (req, res) => {
  try {
    const retrievedUsers = await retrieveAllUsersFromDB();
    res.send(retrievedUsers);
  } catch (error) {
    res.status(404).send({ error: 'No documents found' });
  }
};
