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
    votes: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    upvoteScore(state, id) {
      let post = state.posts.find(p => p.id == id);
      post.ratingX++;
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
    async upvoteScore({ commit }, id) {
      try {
        let post = state.posts.find(p => p.id == id);
        let res = await api.put("/memes", id, post);
        commit("upvoteScore", id);
      }
      catch (error) {
        console.error(error);
      }
    }
  }
})
