import express from 'express';
import { getPosterById, getPosters } from '../controllers/posters.controllers';

const router = express.Router();

router.get('/', getPosters);

router.get('/:id', getPosterById);

export default router;
