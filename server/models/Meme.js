import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Meme = new Schema(
  {
    title: { type: String, required: true },
    memeUrl: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    ratingX: { type: Number, required: true, default: 0 },
    ratingY: { type: Number, required: true, default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Meme.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

Meme.virtual("comments", {
  localField: "_id",
  ref: "Comments",
  foreignField: "memeId"
})

export default Meme;
