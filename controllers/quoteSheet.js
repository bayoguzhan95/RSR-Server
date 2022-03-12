import slugify from 'slugify';

export const addQuoteSheet = async (req, res) => {
    console.log(req.body);
  //   try {
  //     const { shipmentType } = req.body;
  //     let shipmentTypeExist = await ShipmentType.findOne({ shipmentType: shipmentType }).exec();
  //     if (shipmentTypeExist) return res.status(400).send(`${shipmentType} already created.`);
  //     const ship = new ShipmentType({
  //       shipmentType,
  //     });
  //     await ship.save();
  //     return res.json({ shipmentType });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(400).send('Error. Try again.');
  //   }
};
