import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [100, "Name cannot exceed 100 characters"],
    },
     subject: {
    type: String,
    required: [true, "Subject is required"],
    trim: true,
    maxlength: [200, "Subject cannot exceed 200 characters"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    maxlength: [1000, "Message cannot exceed 1000 characters"],
  },
  status: {
    type: String,
    enum: ["new", "read", "replied"],
    default: "new",
  },
}, {timestamps:true})


const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema)