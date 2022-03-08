import slugify from 'slugify';
import ShipmentType from '../models/shipmentType';
import Season from '../models/Season';

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

export const addSeason = async (req, res) => {
  try {
    const { seasons } = req.body;

    let seasonExist = await Season.findOne({ season: seasons }).exec();
    if (seasonExist) return res.status(400).send(`${seasons} already created.`);

    const ss = new Season({
      seasons,
    });
    await ss.save();
    return res.json({ seasons });
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
