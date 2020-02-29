import { dbContext } from "../db/DbContext";
import { BadRequest, UnAuthorized } from "../utils/Errors";

class MemeService {
  async getAll(query = {}) {
    let values = await dbContext.Memes.find(query).populate(
      "creator",
      "name picture"
    ).populate("comments")
      .populate({ path: "comments", populate: { path: "creator", select: "name" } });
    return values;
  }
  async getById(id) {
    let value = await dbContext.Memes.findById(id).populate("comments")
      .populate({ path: "comments", populate: { path: "creator", select: "name" } });
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(body) {
    return await dbContext.Memes.create(body)
  }
  async update(id, update, email) {
    let meme = await dbContext.Memes.findById(id).populate("comments");
    if (meme.creatorEmail != email) {
      throw new UnAuthorized()
    }
    meme.title = update.title || meme.title;
    meme.ratingX = update.ratingX || meme.ratingX;
    meme.ratingY = update.ratingY || meme.ratingY;
    await meme.save()
    return meme;
  }

  async delete(id, email) {
    let meme = await dbContext.Memes.findById(id);
    if (meme.creatorEmail != email) {
      throw new UnAuthorized()
    }
    await dbContext.Memes.findByIdAndDelete(meme.id)
  }
}

export default new MemeService();
