import slugify from 'slugify';
import ShipmentType from '../models/shipmentType';

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
