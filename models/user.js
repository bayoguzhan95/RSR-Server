import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    surname: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    department: {
      type: Object,
    },
    status: {
      type: Object,
    },
    password: {
      type: String,
      min: 6,
      max: 64,
    },
    phone: {
      type: String,
      trim: true,
    },

    followedby: {
      type: Array,
      default: false,
    },
    followedbyfit: {
      type: Array,
      default: false,
    },

    orders: {
      type: Array,
      default: false,
    },
    quotesheet: {
      type: Array,
      default: false,
    },
    finance: {
      type: Array,
      default: false,
    },
    proformas: {
      type: Array,
      default: false,
    },
    traffic: {
      type: Array,
      default: false,
    },
    companies: { type: Array, default: false },
    reports: { type: Array, default: false },
    quality: { type: Array, default: false },

    employees: {
      type: Array,
      default: false,
    },
    settings: { type: Array, default: false },
    shipmentplan: { type: Array, default: false },

    role: {
      type: [String],
      default: ['Client'],
      enum: ['User', 'Client', 'Admin'],
    },
  
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
