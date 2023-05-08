import mongoose from 'mongoose';

const credentialSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    Customer: {
      type: Number,
      default: 2001,
    },
    Moderator: Number,
    Admin: Number,
  },
  refreshToken: {
    type: String,
  },
});

const Credential = mongoose.model('Credential', credentialSchema);
export default Credential;
