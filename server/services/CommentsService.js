import mongoose from "mongoose";
import Comment from "../models/Comment";

const _repository = mongoose.model("Comment", Comment);

class CommentsService {
  async getAll() {
    return await _repository.find({});
  }

  async findById(id) {
    return await _repository.findById(id);
  }

  async create(body) {
    return await _repository.create(body);
  }

  async findCommentByMemeId(id) {
    return await _repository.find({ meme: id })
  }

  async deleteCommentById(id) {
    return await _repository.findByIdAndDelete(id)
  }
}

const commentsService = new CommentsService();
export default commentsService;
