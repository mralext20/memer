import mongoose from "mongoose";
import { dbContext } from "../db/DbContext";
import { UnAuthorized } from "../utils/Errors";



class CommentsService {
  async getAll(query = {}) {
    return await dbContext.Comments.find(query).populate(
      "creator", "name picture"
    );
  }

  async findById(id) {
    return await dbContext.Comments.findById(id).populate(
      "creator", "name picture"
    );
  }

  async create(body) {
    let comment = await dbContext.Comments.create(body)
    return this.findById(comment.id)
  }

  async update(id, update, email) {
    let comment = await dbContext.Comments.findById(id)
    if (comment.creatorEmail != email) {
      throw new UnAuthorized();
    }
    comment.comment = update.comment || comment.comment;
    comment.rating = update.rating || comment.rating;
    await comment.save()
    return comment
  }

  async findCommentsByMemeId(id) {
    return await dbContext.Comments.find({ memeId: id })
  }

  async deleteCommentById(id, email) {
    let comment = await dbContext.Comments.findById(id)
    if (comment.creatorEmail != email) {
      throw new UnAuthorized()
    }
    return await dbContext.Comments.findByIdAndDelete(id)
  }
}

const commentsService = new CommentsService();
export default commentsService;
