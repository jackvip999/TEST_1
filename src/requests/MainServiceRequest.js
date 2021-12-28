import requestApi from '../services/RequestApiMiddleware';

const mainServices = '/main-services';

export default {
    
    getMainServices() {
        return requestApi('get', `${mainServices}`);
    }

};
