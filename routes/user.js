import express from 'express';
import { create, listAll, remove, read, update } from '../controllers/user';

const router = express.Router();

// controller

// routes
router.post('/user', create);
router.get('/users/:count', listAll);
router.delete('/user/:slug', remove);
router.get('/user/:slug', read);
router.put('/user/:slug', update);

module.exports = router;
