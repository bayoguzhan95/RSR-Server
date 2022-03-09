import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema;

const DeliveryTermSchema = new Schema(
  {
    deliveryTerm: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('DeliveryTerm', DeliveryTermSchema);
