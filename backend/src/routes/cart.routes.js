import express from 'express';
import { createCart, getCart, updateCart } from '../controllers/cart.controllers';

const router = express.Router();

router.get('/', getCart);
router.post('/', createCart);
router.patch('/', updateCart);

export default router;
