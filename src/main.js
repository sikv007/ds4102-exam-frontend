import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseLogo from "./components/shared/ui/BaseLogo.vue";
import BaseButton from "./components/shared/ui/BaseButton.vue";

import "./assets/scss/main.scss";

const app = createApp(App);
app.component("base-logo", BaseLogo);
app.component("base-button", BaseButton);
app.use(router);
app.mount("#app");
