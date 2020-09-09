import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container, Row, Col, Card } from 'react-bootstrap';

import { accountService } from '../_services';

import { Login } from './Login';
import { Register } from './Register';
import { VerifyEmail } from './VerifyEmail';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';

function Account({ history, match }) {
    const { path } = match;

    useEffect(() => {
        // redirect to home if already logged in
        if (accountService.userValue) {
            history.push('/');
        }
    }, []);

    return (
        <Container>
            <Row>
                <Col className="mt-3" sm={8, { offset: 2 }}>                    
                    <Switch>
                        <Route path={`${path}/login`} component={Login} />
                        <Route path={`${path}/register`} component={Register} />
                        <Route path={`${path}/verify-email`} component={VerifyEmail} />
                        <Route path={`${path}/forgot-password`} component={ForgotPassword} />
                        <Route path={`${path}/reset-password`} component={ResetPassword} />
                    </Switch>                    
                </Col>
            </Row>
        </Container>
    );
}

export { Account };