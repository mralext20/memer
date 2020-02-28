import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import MemeSchema from "../models/Meme";
import CommentSchema from "../models/Comment"
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Memes = mongoose.model("Memes", MemeSchema);
  Comments = mongoose.model("Comments", CommentSchema)
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
