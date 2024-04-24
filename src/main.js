// import './assets/main.css';

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "../style.css";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App);

app.use(store);
app.use(router).mount("#app");
app.use(PrimeVue);