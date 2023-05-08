import express from 'express';
import { productCreateHandler } from '../controllers/products.js';

const product_router = express.Router();

product_router.post('/create-product', productCreateHandler);
product_router.get('/retrieve-product/:id', productCreateHandler);
product_router.get('/retrieve-products', productCreateHandler);
product_router.put('/modify-products', productCreateHandler);
product_router.delete('/remove-products', productCreateHandler);

export default product_router;
