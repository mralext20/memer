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
    posts: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    removePost(state, postId) {
      state.posts = state.posts.filter(p => p._id != postId)
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
        let res = await api.get("");
        commit("setPosts", res.data.data);
      } catch (error) {

      }
    },
    async deletePost({ commit, dispatch }, postId) {
      try {
        let res = await api.delete(postId)
        commit("removePost", postId)
      } catch (error) {

      }
    }
  }
});
