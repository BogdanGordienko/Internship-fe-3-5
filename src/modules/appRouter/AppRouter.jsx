import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from '../../routes';
import * as constants from '../../constants/constants';

const AppRouter = ({
    user,
}) => {
    return (
        user ?
            <Switch>
                {routes.privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={() => <Component />} exact />
                )}
                <Redirect to={constants.MAIN_ROUTE}/>
            </Switch>
        :
        <Switch>
            {routes.publicRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} component={() => <Component />} exact />
            )}
            <Redirect to={constants.LOGIN_ROUTE}/>
        </Switch>
    )
};

export default AppRouter;
