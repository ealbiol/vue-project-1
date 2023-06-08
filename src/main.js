import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);

// GLOBAL COMPONENTS REGISTRATION
app.component('base-card',BaseCard);

app.mount('#app');
