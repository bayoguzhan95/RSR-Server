import slugify from 'slugify';
import ShipmentType from '../models/shipmentType';
import Season from '../models/Season';
import Certification from '../models/Certification';
import Country from '../models/Country';
import DeliveryTerm from '../models/DeliveryTerm';
import Box from '../models/Box';

// Shipment Type
export const getAllShipmentTypes = async (req, res) => {
  let shipmentTypes = await ShipmentType.find({})
    .sort({ createdAt: 1 })
    // .sort([["", "desc"]])
    .exec();
  res.json(shipmentTypes);
};

export const addShipmentType = async (req, res) => {
  try {
    const { shipmentType } = req.body;

    let shipmentTypeExist = await ShipmentType.findOne({ shipmentType: shipmentType }).exec();
    if (shipmentTypeExist) return res.status(400).send(`${shipmentType} already created.`);

    const ship = new ShipmentType({
      shipmentType,
    });
    await ship.save();
    return res.json({ shipmentType });
  } catch (error) {
    console.log(error);
    return res.status(400).send('Error. Try again.');
  }
};

export const deleteShipmentType = async (req, res) => {
  const { slug } = req.params;
  const shiptp = await ShipmentType.findOneAndRemove({
    shipmentType: slug,
  });
  return res.json(shiptp);
};

export const updateShipmentType = async (req, res) => {
  if (req.body.shipmentType) {
    req.body.slug = slugify(req.body.shipmentType);
  }
  const updated = await ShipmentType.findOneAndUpdate({ shipmentType: req.params.slug }, req.body, { new: true }).exec();
  res.json(updated);
};

// Seasons
export const addSeason = async (req, res) => {
  const { season } = req.body;

  try {
    let seasonExist = await Season.findOne({ season }).exec();
    if (seasonExist) return res.status(400).send(`${season} already created.`);

    const ss = new Season({
      season,
    });
    await ss.save();
    return res.json({ season });
  } catch (error) {
    console.log(error);
    return res.status(400).send('Error. Try again.');
  }
};
export const getAllSeasons = async (req, res) => {
  try {
    let Seasons = await Season.find({}).sort({ createdAt: 1 }).exec();
    res.json(Seasons);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
export const deleteSeason = async (req, res) => {
  try {
    const { slug } = req.params;
    const deleteseasons = await Season.findOneAndRemove({
      season: slug,
    });
    return res.json(deleteseasons);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
export const updateSeason = async (req, res) => {
  try {
    if (req.body.season) {
      req.body.slug = slugify(req.body.season);
    }
    const updated = await Season.findOneAndUpdate({ season: req.params.slug }, req.body, { new: true }).exec();
    res.json(updated);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};

// Certifications

export const addCertification = async (req, res) => {
  const { certification } = req.body;
  try {
    let certificateExist = await Certification.findOne({ certification }).exec();
    if (certificateExist) return res.status(400).send(`${certification} already created.`);

    const ss = new Certification({
      certification,
    });
    await ss.save();
    return res.json({ certification });
  } catch (error) {
    console.log(error);
    return res.status(400).send('Error. Try again.');
  }
};
export const getAllCertifications = async (req, res) => {
  try {
    let Certifications = await Certification.find({}).sort({ createdAt: 1 }).exec();
    res.json(Certifications);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
export const deleteCertificate = async (req, res) => {
  try {
    const { slug } = req.params;
    const deletecertification = await Certification.findOneAndRemove({
      certification: slug,
    });
    return res.json(deletecertification);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
export const updateCertification = async (req, res) => {
  try {
    if (req.body.certification) {
      req.body.slug = slugify(req.body.certification);
    }
    const updated = await Certification.findOneAndUpdate({ certification: req.params.slug }, req.body, { new: true }).exec();
    res.json(updated);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};

// Countries

export const addCountry = async (req, res) => {
  const { country } = req.body;
  try {
    let countryexist = await Country.findOne({ country }).exec();
    if (countryexist) return res.status(400).send(`${country} already created.`);

    const ss = new Country({
      country,
    });
    await ss.save();
    return res.json({ country });
  } catch (error) {
    console.log(error);
    return res.status(400).send('Error. Try again.');
  }
};
export const getAllCountries = async (req, res) => {
  try {
    let Countries = await Country.find({}).sort({ createdAt: 1 }).exec();
    res.json(Countries);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
export const deleteCountry = async (req, res) => {
  try {
    const { slug } = req.params;
    const deletecountry = await Country.findOneAndRemove({
      country: slug,
    });
    return res.json(deletecountry);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
export const updateCountry = async (req, res) => {
  try {
    if (req.body.country) {
      req.body.slug = slugify(req.body.country);
    }
    const updated = await Country.findOneAndUpdate({ country: req.params.slug }, req.body, { new: true }).exec();
    res.json(updated);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};

// Delivery Term

export const addDeliveryTerm = async (req, res) => {
  const { deliveryTerm } = req.body;
  try {
    let deliverytermexist = await DeliveryTerm.findOne({ deliveryTerm }).exec();
    if (deliverytermexist) return res.status(400).send(`${deliveryTerm} already created.`);

    const ss = new DeliveryTerm({
      deliveryTerm,
    });
    await ss.save();
    return res.json({ deliveryTerm });
  } catch (error) {
    console.log(error);
    return res.status(400).send('Error. Try again.');
  }
};
export const getAllDeliveryTerms = async (req, res) => {
  try {
    let DeliveryTerms = await DeliveryTerm.find({}).sort({ createdAt: 1 }).exec();
    res.json(DeliveryTerms);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
export const deleteDeliveryTerm = async (req, res) => {
  try {
    const { slug } = req.params;
    const deleteDeliveryTerm = await DeliveryTerm.findOneAndRemove({
      deliveryTerm: slug,
    });
    return res.json(deleteDeliveryTerm);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
export const updateDeliveryTerm = async (req, res) => {
  try {
    if (req.body.deliveryTerm) {
      req.body.slug = slugify(req.body.deliveryTerm);
    }
    const updated = await DeliveryTerm.findOneAndUpdate({ deliveryTerm: req.params.slug }, req.body, { new: true }).exec();
    res.json(updated);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};

// BOX SETTINGS

export const addBox = async (req, res) => {
  const { l, w, h, maxweight, tareweight } = req.body.box;

  const box = new Box({
    length: l,
    width: w,
    height: h,
    maxWeight: maxweight,
    tareWeight: tareweight,
  });

  await box.save();
  return res.json('Succesfully created');
};
export const getAllBoxes = async (req, res) => {
  try {
    let Boxes = await Box.find({}).sort({ createdAt: 1 }).exec();
    res.json(Boxes);
  } catch (error) {
    return res.status(400).send('Error in , Try again.');
  }
};
export const deleteBox = async (req, res) => {
  try {
    const { slug } = req.params;
    const deleteBox = await Box.findOneAndRemove({
      _id: slug,
    });
    return res.json(deleteBox);
  } catch (error) {
    return res.status(400).send('Error. Try again');
  }
};
