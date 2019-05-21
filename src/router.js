import Vue from "vue";
import Router from "vue-router";
import axios from "axios";
import Home from "./views/Home.vue";
import Axios from "./views/Axios.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import City from "./views/City.vue";
import Countries from "./views/Countries.vue";
import Country from "./views/Country.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/axios",
      name: "axios",
      component: Axios,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/city/:cityName",
      name: "City",
      component: City
    },
    {
      path: "/country",
      name: "Country",
      component: Countries
    },
    {
      path: "/country/:countryName",
      name: "Country",
      component: Country
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  try {
    await axios.get("/api/whoami");
  } catch {
    if (to.meta.isPublic) {
      return next(true);
    }
    return next("/login");
  }
  next(true);
});

export default router;
