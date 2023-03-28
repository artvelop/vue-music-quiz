// @ts-ignore
import Vuex from 'vuex';

const props = ['state', 'getters', 'actions', 'mutations'];

export function applyMixin(rawModule: any) {
    if (rawModule.mixins) {
        props.forEach((prop) => {
            rawModule[prop] = Object.assign(
                {},
                ...rawModule.mixins.map(
                    (mixinModule: any) => mixinModule[prop],
                ),
                rawModule[prop],
            );
        });
    }
    if (rawModule.modules) {
        rawModule.modules = Object.keys(rawModule.modules).reduce(
            (ret: any, name: string) => {
                ret[name] = applyMixin(rawModule.modules[name]);
                return ret;
            },
            {},
        );
    }
    return rawModule;
}
interface State {}

export class Store extends Vuex.Store<State> {
    constructor(options = {}) {
        super(applyMixin(options));
    }
    registerModule(path: any, rawModule: any) {
        this.registerModule(path, applyMixin(rawModule));
    }
}

export default Store;