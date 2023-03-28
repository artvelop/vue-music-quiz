import {createRouter, createWebHistory} from 'vue-router';
import routes from './routes';
import { dispatchAction } from './hooks';

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(dispatchAction);

export default router;
