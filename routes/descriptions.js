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
  addCertification,
  getAllCertifications,
  deleteCertificate,
  updateCertification,
  addCountry,
  getAllCountries,
  deleteCountry,
  updateCountry,
  addDeliveryTerm,
  getAllDeliveryTerms,
  deleteDeliveryTerm,
  updateDeliveryTerm,
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

// Certifications
router.post('/addCertification', addCertification);
router.get('/getAllCertifications', getAllCertifications);
router.delete('/deleteCertificate/:slug', deleteCertificate);
router.put('/updateCertification/:slug', updateCertification);

// Countries
router.post('/addCountry', addCountry);
router.get('/getAllCountries', getAllCountries);
router.delete('/deleteCountry/:slug', deleteCountry);
router.put('/updateCountry/:slug', updateCountry);

// Delivery Terms

router.post('/addDeliveryTerm', addDeliveryTerm);
router.get('/getAllDeliveryTerms', getAllDeliveryTerms);
router.delete('/deleteDeliveryTerm/:slug', deleteDeliveryTerm);
router.put('/updateDeliveryTerm/:slug', updateDeliveryTerm);

module.exports = router;
