const FETCH_DATA_START = 'FETCH_DATA_START';
const FETCH_DATA_END = 'FETCH_DATA_END';
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

/*function genFetchDataAction(action) {
    return (context, payload) => {
        context.commit(FETCH_DATA_START);
        action(context, payload)
            .then(() => {
                context.commit(FETCH_DATA_END);
            })
            .catch((error) => {
                context.commit(FETCH_DATA_ERROR, error);
                return Promise.reject(error);
            });
    };
}*/

const state = {
    initDataFetching: false,
    error: null,
};

const actions = {
};

const mutations = {
    [FETCH_DATA_START](state: any) {
        state.initDataFetching = true;
    },
    [FETCH_DATA_END](state: any) {
        state.initDataFetching = false;
    },
    [FETCH_DATA_ERROR](state: any, payload: any) {
        state.initDataFetching = false;
        state.error = payload;
    },
};

export default {
    state,
    actions: Object.keys(actions).reduce((obj: any, rawActionName: string) => {
        // @ts-ignore
        obj[`beforeEnter${rawActionName}`] = actions[rawActionName];
        return obj;
    }, {}),
    mutations,
};
