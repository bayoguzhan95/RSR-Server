import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema;

const employeeSchema = new Schema(
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
    password: {
      type: String,
      
      min: 6,
      max: 64,
    },
    phone: {
        type: String,
        trim: true,
        
      },
      department: {
        type: String,
        trim: true,
        
      },
      status: {
        type: String,
        trim: true,
        
      },
    picture: {
      type: String,
      default: "/avatar.png",
    },
    orders:{
      type:Array,
      default:[""]
    },
    quoteSheet:{
      type:Array,
      default:[""]
    },
    finance:{
      type:Array,
      default:[""]
    },
    proforma:{
      type:Array,
      default:[""]
    },
    traffic:{
      type:Array,
      default:[""]
    },
    companies:{
      type:Array,
      default:[""]
    },
    reports:{
      type:Array,
      default:[""]
    },
    packing:{
      type:Array,
      default:[""]
    },
    quality:{
      type:Array,
      default:[""]
    },
    employees:{
      type:Array,
      default:[""]
    },
    settings:{
      type:Array,
      default:null
    },
    role: {
      type: [String],
      default: ["Client"],
      enum: ["User", "Client", "Admin"],
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
    passwordResetCode: {
      data: String,
      default: "",
    },
    courses: [{ type: ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

export default mongoose.model("Employee",  employeeSchema);
