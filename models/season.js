import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema;

const SeasonSchema = new Schema(
  {
    season: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Season', SeasonSchema);
