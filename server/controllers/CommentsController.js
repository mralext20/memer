import express from "express";
import BaseController from "../utils/BaseController";
import CommentService from "../services/CommentsService";
import auth0Provider from "@bcwdev/auth0provider";




export class CommentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router = express
      .Router()
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get("/:id", this.getById)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await CommentService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await CommentService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {

      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let data = await CommentService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await CommentService.update(req.params.id, req.body, req.userInfo.email);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await CommentService.deleteCommentById(req.params.id, req.userInfo.email);
      res.send("Deleted");
    } catch (error) {
      next(error);
    }
  }
}



