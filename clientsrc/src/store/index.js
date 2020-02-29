import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    posts: [],
    activePost: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setActivePost(state, post) {
      state.activePost = post
    },
    addPost(state, data) {
      state.posts.push(data)
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getPosts({ commit, dispatch }) {
      try {
        let res = await api.get("/memes");
        commit("setPosts", res.data);
      } catch (error) {
        console.error(error)
      }
    },
    async getPostById({ commit, dispatch }, post) {
      try {
        let res = await api.get(`/memes/${post.id}`)
        commit("setActivePost", res.data)
      } catch (error) {
        console.error(error);

      }
    },
    async setActivePost({ commit, dispatch }, post) {
      try {
        let res = await api.get(`/memes/${post.id}`);
        commit("setActivePost", post)
      }
      catch (error) {
        console.error();
      };
    },
    async addMeme({ commit }, data) {
      try {
        let res = await api.post("memes", data);
        commit("addPost", res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
});
