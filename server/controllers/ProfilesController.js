import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";
import MemesService from "../services/MemesService";

export class ProfilesController extends BaseController {
  constructor() {
    super("api/profile");
    this.router = express
      .Router()
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserProfile)
      .get("/:id/posts", this.getPostsFromUser)
      .put("/:id", this.edit);
  }
  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.user.sub;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
  async getPostsFromUser(req, res, next) {
    try {
      let data = await MemesService.getAll({ creatorEmail: req.userInfo.email });
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
