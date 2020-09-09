import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { FullTitle } from '../_helpers';
import { accountService } from '../_services';

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;

    return (
        <>
            <Helmet>
                <title>{FullTitle(`${user.firstName} ${user.lastName}`)}</title>
            </Helmet>
            <h1>My Profile</h1>
            <p>
                <strong>Name: </strong> {user.title} {user.firstName} {user.lastName}<br />
                <strong>Email: </strong> <a href={`mailto:${user.email}`}>{user.email}</a>
            </p>
            <p><Link to={`${path}/update`} >Update Profile</Link></p>
        </>
    );
}

export { Details };