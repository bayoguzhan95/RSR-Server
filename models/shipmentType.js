import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema;

const shipmentTypeSchema = new Schema(
  {
    shipmentType: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('ShipmentType', shipmentTypeSchema);
