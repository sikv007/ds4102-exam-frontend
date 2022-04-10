import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseLogo from "./components/shared/ui/BaseLogo.vue";
import BaseButton from "./components/shared/ui/BaseButton.vue";
import BaseModal from "./components/shared/ui/BaseModal.vue";
import BaseBack from "./components/shared/ui/BaseBack.vue";
import BaseCard from "./components/shared/ui/BaseCard.vue";
import BaseImage from "./components/shared/ui/BaseImage.vue";

import "./assets/scss/main.scss";

const app = createApp(App);
app.component("base-logo", BaseLogo);
app.component("base-button", BaseButton);
app.component("base-modal", BaseModal);
app.component("base-back", BaseBack);
app.component("base-card", BaseCard);
app.component("base-image", BaseImage);
app.use(router);
app.mount("#app");
