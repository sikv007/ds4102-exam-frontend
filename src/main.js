import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router';
import BaseLogo from './components/shared/ui/BaseLogo.vue';
import BaseButton from './components/shared/ui/BaseButton.vue';
import BaseModal from './components/shared/ui/BaseModal.vue';
import BaseBack from './components/shared/ui/BaseBack.vue';
import BaseCard from './components/shared/ui/BaseCard.vue';
import BaseImage from './components/shared/ui/BaseImage.vue';
import BaseEmpty from './components/shared/ui/BaseEmpty.vue';
import BaseList from './components/shared/ui/BaseList.vue';
import BaseAlert from './components/shared/ui/BaseAlert.vue';
import BaseIcon from './components/shared/ui/BaseIcon.vue';
import BaseForm from './components/shared/ui/BaseForm.vue';
import BaseToggle from './components/shared/ui/BaseToggle.vue';
import BaseSingle from "./components/shared/ui/BaseSingle.vue"

import './assets/scss/main.scss';

const app = createApp(App);
app.component('BaseLogo', BaseLogo);
app.component('BaseButton', BaseButton);
app.component('BaseModal', BaseModal);
app.component('BaseBack', BaseBack);
app.component('BaseCard', BaseCard);
app.component('BaseImage', BaseImage);
app.component('BaseEmpty', BaseEmpty);
app.component('BaseList', BaseList);
app.component('BaseAlert', BaseAlert);
app.component('BaseIcon', BaseIcon);
app.component('BaseForm', BaseForm);
app.component('BaseToggle', BaseToggle);
app.component('BaseSingle', BaseSingle);
app.use(router);
app.mount('#app');
