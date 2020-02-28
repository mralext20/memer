import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import Meme from "../models/Meme"

class MemeService {
  async getAll(query = {}) {
    let values = await dbContext.Values.find(query).populate(
      "creator",
      "name picture"
    );
    return values;
  }
  async getById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export default new MemeService();
