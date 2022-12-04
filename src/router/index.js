import { createRouter, createWebHashHistory } from "vue-router";
import MainComponent from "@/components/MainComponent";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
