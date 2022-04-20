import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseLogo from "./components/shared/ui/BaseLogo.vue";
import BaseButton from "./components/shared/ui/BaseButton.vue";
const BaseModal = defineAsyncComponent(() =>
  import("./components/shared/ui/BaseModal.vue")
);
import BaseBack from "./components/shared/ui/BaseBack.vue";
import BaseCard from "./components/shared/ui/BaseCard.vue";
import BaseImage from "./components/shared/ui/BaseImage.vue";
const BaseEmpty = defineAsyncComponent(() =>
  import("./components/shared/ui/BaseEmpty.vue")
);
import BaseList from "./components/shared/ui/BaseList.vue";

import "./assets/scss/main.scss";

const app = createApp(App);
app.component("BaseLogo", BaseLogo);
app.component("BaseButton", BaseButton);
app.component("BaseModal", BaseModal);
app.component("BaseBack", BaseBack);
app.component("BaseCard", BaseCard);
app.component("BaseImage", BaseImage);
app.component("BaseEmpty", BaseEmpty);
app.component("BaseList", BaseList);
app.use(router);
app.mount("#app");
