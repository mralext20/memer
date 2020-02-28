import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import MemeSchema from "../models/Meme";
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Memes = mongoose.model("Memes", MemeSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
