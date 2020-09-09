import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Details } from './Details';
import { Update } from './Update';

function Profile({ match }) {
    const { path } = match;

    return (        
        <Container>
            <Switch>
                <Route exact path={path} component={Details} />
                <Route path={`${path}/update`} component={Update} />
            </Switch>
        </Container>        
    );
}

export { Profile };