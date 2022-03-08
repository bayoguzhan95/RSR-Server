import express from 'express';

const router = express.Router();

// controllers
import { addShipmentType, getAllShipmentTypes, deleteShipmentType, updateShipmentType } from '../controllers/descriptions';

// Shipment Type
router.post('/addShipmentType', addShipmentType);
router.get('/getAllShipmentTypes', getAllShipmentTypes);
router.delete('/deleteShipmentType/:slug', deleteShipmentType);
router.put('/updateShipmentType/:slug', updateShipmentType);

module.exports = router;
