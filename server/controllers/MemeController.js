import express from "express";
import BaseController from "../utils/BaseController";
import MemeService from "../services/MemeServices";
import auth0Provider from "@bcwdev/auth0provider";



export class MemeController extends BaseController {
  constructor() {
    super("api/values");
    this.router = express
      .Router()
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get("/:id", this.getById)
      .get("/:id", this.getMemeById)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await MemeService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await MemeService.getById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getMemeById(req, res, next) {
    try {
      let data = await CommentService.getMemeById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creator = req.user.email;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await MemeService.update(req.paras.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await MemeService.delete(req.params.id);
      res.send("Deleted");
    } catch (error) {
      next(error);
    }
  }
}



