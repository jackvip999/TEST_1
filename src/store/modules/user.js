
const user = {
    state: () => ({
        user: {
            name: '',
            email: '',
            token: '',
        },
        isLoggedIn: false,
    }),
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        },
        setUser(state, user) {
            state.user = user
        },
        clearUser(state) {
            state.user = {}
        },
        setIsLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
        }
    },
    actions: {
        login({ commit, state }, user) {
            commit('setUser', user)
        },
        logout({ commit }) {
            commit('clearUser')
        },
        setIsLoggedIn({ commit }, isLoggedIn) {
            commit('setIsLoggedIn', isLoggedIn)
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        user(state) {
            return state.user
        }
    }
};

export default user;
