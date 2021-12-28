import requestApi from '../services/RequestApiMiddleware';

const register = '/auth/register';

export default {

    async postRegister(data) {
        return await requestApi('post', `${register}`, data);
    }

};
