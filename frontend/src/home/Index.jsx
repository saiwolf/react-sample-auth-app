import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '../_services';

function Home() {
    const user = accountService.userValue;

    if (!user) return LoggedOutHome();

    return (
        <div className="p-4">
            <div className="container text-center">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
            </div>
        </div>
    );
}

function LoggedOutHome() {
    return (
        <div className="p-4">
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">Welcome to the React JWT Sample App!</h1>
                    <div className="text-center">
                        <h4 className="text-muted">
                            You can sign up by clicking the button below!
                        </h4>
                        <Link to='/account/register' className="btn btn-primary">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Home };