import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Value = new Schema(
  {
    title: { type: String, required: true },
    memeUrl: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    ratingX: { type: Number, required: true, default: 0 },
    ratingY: { type: Number, required: true, default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Value.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Value;
