import store from '../store';
import axios from 'axios';
import { useRouter } from 'vue-router'

const requestApi = (httpMethod, url, data = null, params = null) => {

    const getters = store.getters;
    const router = useRouter();

    if (!getters.isLoggedIn) {
        if (router != undefined) {
            router.push({ name: 'Login' });
        }
    }

    const requestApiCall = axios.create({
        baseURL: 'http://localhost:3009/api/v1/',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${getters.user.token}`
        }
    });

    switch (httpMethod) {
        case 'get':
            return requestApiCall.get(url, { params });
        case 'post':
            return requestApiCall.post(url, data);
        case 'put':
            return requestApiCall.put(url, data);
        case 'delete':
            return requestApiCall.delete(url);
        default:
            return requestApiCall.get(url, { params: data });
    }
}

export default requestApi;
