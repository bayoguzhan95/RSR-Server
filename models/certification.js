import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema;

const CertificationSchema = new Schema(
  {
    certification: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Certification', CertificationSchema);
