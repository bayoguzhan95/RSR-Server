import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema;

const CountrySchema = new Schema(
  {
    country: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Country', CountrySchema);
