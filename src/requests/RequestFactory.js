import MenuRequest from './MenuRequest';
import SettingRequest from './SettingRequest';
import MainServiceRequest from './MainServiceRequest';
import LoginRequest from './LoginRequest';
import RegisterRequest from './RegisterRequest';

const repositories = {
  menu: MenuRequest,
  setting: SettingRequest,
  mainService: MainServiceRequest,
  login: LoginRequest,
  register: RegisterRequest,
};

const RequestFactory = {
  get: name => repositories[name]
};

export default RequestFactory;
