// @ts-ignore
import store from '../store/index';

export function dispatchAction(to: any, from: any, next: Function) {
    if (to.meta.action) {
        store.dispatch(`beforeEnter${to.name}`, { to, from });
    }
    return next();
}
