import { createApp } from 'vue';
import App from './App.vue';
import Whitianga from '../src';

const app = createApp(App);

app.use(Whitianga);
app.mount('#app');
