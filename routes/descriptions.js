import express from 'express';

const router = express.Router();

// controllers
import {
  addShipmentType,
  getAllShipmentTypes,
  deleteShipmentType,
  updateShipmentType,
  addSeason,
  getAllSeasons,
  deleteSeason,
  updateSeason,
} from '../controllers/descriptions';

// Shipment Type
router.post('/addShipmentType', addShipmentType);
router.get('/getAllShipmentTypes', getAllShipmentTypes);
router.delete('/deleteShipmentType/:slug', deleteShipmentType);
router.put('/updateShipmentType/:slug', updateShipmentType);

// Seasons
router.post('/addSeason', addSeason);
router.get('/getAllSeasons', getAllSeasons);
router.delete('/deleteSeason/:slug', deleteSeason);
router.put('/updateSeason/:slug', updateSeason);

module.exports = router;
