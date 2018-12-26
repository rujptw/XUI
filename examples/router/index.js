import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/button",
      name: "Button",
      component: resolve => require(["../docs/button.md"], resolve)
    },
    {
      path: "/data-panel",
      name: "DataPanel",
      component: resolve => require(["../docs/data-panel.md"], resolve)
    }
  ]
});
