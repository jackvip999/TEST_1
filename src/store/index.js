import { createStore } from 'vuex'
import user from "./modules/user";

const store = createStore({
    modules: {
        user
    }
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
})


export default store;