import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  credentialsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Credential', // this ref needs model name(Credential) not collection name as "credentials"
    required: true,
  },
});

const User = mongoose.model('User', userSchema); // when we name a model,it should be singular form and with the first letter capitalized
export default User;
