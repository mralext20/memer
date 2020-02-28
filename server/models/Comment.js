import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const Comment = new Schema(
  {
    creatorEmail: { type: String, required: true },
    comment: { type: String, required: true },
    memeId: { type: ObjectId, required: true },
    rating: { type: Number, required: true, default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Comment.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Comment;
