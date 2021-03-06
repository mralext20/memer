import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Votes from "../components/Votes"
// @ts-ignore
import Profile from "../views/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";
// @ts-ignore
import PostDetails from "../views/PostDetails"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/memes/:postId",
    name: "PostDetails",
    component: PostDetails,
  },
];

const router = new VueRouter({
  routes
});

export default router;
