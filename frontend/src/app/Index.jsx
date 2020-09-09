import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Role } from '../_helpers';
import { accountService } from '../_services';
import { NavBar, PrivateRoute, Alert } from '../_components';
import { Home } from '../home';
import { Profile } from '../profile';
import { Admin } from '../admin';
import { Account } from '../account';

function App() {
    const { pathname } = useLocation();
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    return (
        <>
            <NavBar />
            <Alert />
            <Container as="main">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/" component={Home} />
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
                    <Route path="/account" component={Account} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Container>
        </>
    );
}

export { App };