import requestApi from '../services/RequestApiMiddleware';

const settings = '/settings';

export default {
    
    getSettings() {
        return requestApi('get', `${settings}`);
    }

};
