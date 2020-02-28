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

  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }

  async findCommentsByMemeId(id) {
    return await _repository.find({ memeId: id })
  }

  async deleteCommentById(id) {
    return await _repository.findByIdAndDelete(id)
  }
}

const commentsService = new CommentsService();
export default commentsService;
