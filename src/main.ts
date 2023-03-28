import { createApp, reactive, ref } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/index';
import './index.css';
import { PROVIDE_KEYS } from './constants/provideKey';

const app = createApp(App);

app.use(router).use(router).use(store).mount('#app');

app.provide(PROVIDE_KEYS.LOADING_SCREEN, ref(false));
app.provide(PROVIDE_KEYS.QUIZ_LIST, ref([]));
