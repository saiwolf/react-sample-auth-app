import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron } from 'react-bootstrap';

import { accountService } from '../_services';

function Home() {
    const user = accountService.userValue;

    if (!user) return LoggedOutHome();

    return (
        <div className="p-4">
            <Container className="text-center">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
            </Container>
        </div>
    );
}

function LoggedOutHome() {
    return (
        <div className="p-4">
            <Container>
                <Jumbotron>
                    <h1 className="text-center">Welcome to the React JWT Sample App!</h1>
                    <div className="text-center">
                        <h4 className="text-muted">
                            You can sign up by clicking the button below!
                        </h4>
                        <Link to='/account/register' className="btn btn-primary">Sign Up</Link>
                    </div>
                </Jumbotron>
            </Container>
        </div>
    );
}

export { Home };