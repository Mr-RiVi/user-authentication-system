import express from 'express';
import product_router from './products.js';
import users_router from './users.js';

const router = express.Router();

router.use('/users', users_router);
router.use('/products', product_router);

export default router;
