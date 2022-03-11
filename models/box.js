import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema;

const BoxSchema = new Schema(
  {
    length: {
      type: String,
      trim: true,
    },
    width: {
      type: String,
      trim: true,
    },
    height: {
      type: String,
      trim: true,
    },
    maxWeight: {
      type: String,
      trim: true,
    },
    tareWeight: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Box', BoxSchema);
