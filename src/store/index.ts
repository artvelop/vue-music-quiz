// @ts-ignore
import { createStore } from 'vuex';
// @ts-ignore
import actions from './actions';
// @ts-ignore
import getters from './getters';
// @ts-ignore
import { applyMixin } from './storeMixin';

const requireModules = require.context('./modules', false, /\.ts$/);
const modules = requireModules
    .keys()
    .reduce((modules: any, fileName: string) => {
        // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
        const name = fileName.match(/([^./]+)\.ts$/)![1];
        modules[name] = requireModules(fileName).default;
        return modules;
    }, {});

const mutations = {
    set(state: any, [variable, value]: any) {
        state[variable] = value;
    },
    changeShowLnb(state: any) {
        state.isShowLnb = !state.isShowLnb;
    },
};
export default createStore(
    applyMixin({
        state: {
        },
        getters,
        mutations,
        actions,
        modules,
    }),
);
