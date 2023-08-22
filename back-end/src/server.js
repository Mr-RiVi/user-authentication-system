import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import databaseConnection from './config/databaseConnection.js';
import router from './routes/index.js';
import users_router from './routes/users.js';
import authHandler from './controllers/authController.js';
import verifyJWT from './middleware/verifyJWT.js';

dotenv.config();
const app = express();
app.use(express.json({ limit: '1mb' }));

databaseConnection();

app.use(cors());
app.use('/auth', authHandler);
app.use('/api', verifyJWT, router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
