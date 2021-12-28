import requestApi from '../services/RequestApiMiddleware';
import store from '../store';

const login = '/auth/login';

export default {

    async postLogin(data) {
        const res = await requestApi('post', `${login}`, data);
        if (res.status === 200) {
            store.commit('setUser', res.data.data);
            store.commit('setIsLoggedIn', true);
        }
        return res;
    }

};
