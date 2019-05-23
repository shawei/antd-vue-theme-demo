import Vue from "vue";
import App from "./App.vue";

// 全局引入antd
// import Button from "ant-design-vue/lib/button";
// import "ant-design-vue/dist/antd.css";

// 按需引入antd
import { Button } from "ant-design-vue";

Vue.component(Button.name, Button);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
