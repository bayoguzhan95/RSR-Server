import express from 'express';

const router = express.Router();

// controllers
import { addQuoteSheet } from '../controllers/quoteSheet';

// Quote Sheet
router.post('/addQuoteSheet', addQuoteSheet);

module.exports = router;
