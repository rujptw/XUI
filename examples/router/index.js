import Vue from "vue";
import Router from "vue-router";
import { componentRouters } from "./router-config";

Vue.use(Router);

export default new Router({
	routes: componentRouters
});
