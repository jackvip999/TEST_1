import requestApi from '../services/RequestApiMiddleware';

const menus = '/menus';

export default {
    
    getMenus() {
        return requestApi('get', `${menus}`);
    }

};
