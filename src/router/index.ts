import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";

const home = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue")
});
const FormInputsControls = defineAsyncComponent({
  loader: () =>
    import(
      /* webpackChunkName: "FormInputsControls" */ "@/views/FormInputsControls/index.vue"
    )
});

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: home
  },
  {
    path: "/FormInputsControls",
    name: "FormInputsControls",
    component: FormInputsControls
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" }
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
