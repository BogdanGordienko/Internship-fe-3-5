import Login from './modules/login';
import Main from './modules/main';
import * as constants from './constants/constants';

export const publicRoutes = [
    {
        path: constants.LOGIN_ROUTE,
        Component: Login,
    }
];

export const privateRoutes = [
    {
        path: constants.MAIN_ROUTE,
        Component: Main,
    }
];
