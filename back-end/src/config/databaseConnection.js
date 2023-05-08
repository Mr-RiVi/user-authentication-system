import mongoose from 'mongoose';

const databaseConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('error', (error) => {
    console.log('database not connected, database error', error);
  });
  mongoose.connection.once('open', () => {
    console.log('database connection successfully');
  });
};

export default databaseConnection;
