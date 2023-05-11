import Credential from '../models/credentials.js';

export const retrieveUserCredential = async (id, projection) => {
  try {
    const credential = await Credential.findById(id, projection);
    if (!credential)
      throw new Error('No user credential found for the given ID');
    return credential;
  } catch (error) {
    throw new Error(`Faild to retrieve user credential:${error.message}`);
  }
};

export const retrieveAllUsersCredentials = async (queryObject, projection) => {
  try {
    const credentials = await Credential.find(queryObject, projection);
    if (!credentials) throw new Error('No user credentials found');
    return credentials;
  } catch (error) {
    throw new Error(`Failed to retrieve users credential: ${error.message}`);
  }
};

export const modifycredentials = async (id, credentialObject) => {
  try {
    const credentials = await Credential.findByIdAndUpdate(
      id,
      credentialObject,
      { new: true }
    );
    if (!credentials)
      throw new Error('No user credential found for the given ID');
    return credentials;
  } catch (error) {
    throw new Error(`Failed to modify user credential: ${error.message}`);
  }
};
