import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "animate.css";
import "@/assets/css/fonts.css";
import "@/assets/css/tailwind.css";

import Components from "@/components";

const app = createApp(App);

Object.keys(Components).forEach(name => {
  app.component(name, Components[name]);
});

app.use(router);
app.mount("#app");
