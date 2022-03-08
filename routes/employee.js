import express from 'express';

const router = express.Router();

// controllers
import { getAllEmployee, makeEmployee, remove } from '../controllers/employee';

router.post('/make-employee', makeEmployee);
router.get('/getAllEmployee', getAllEmployee);
router.delete('/employee/:slug', remove);

module.exports = router;
