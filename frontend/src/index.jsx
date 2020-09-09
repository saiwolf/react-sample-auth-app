import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';

import { history, FullTitle } from './_helpers';
import { accountService } from './_services';
import { App } from './app';

import './styles.scss';

// attempt silent token refresh before startup
accountService.refreshToken().finally(startApp);

function startApp() {
    render(        
        <Router history={history}>
            <Helmet>
                <title>{FullTitle('')}</title>
            </Helmet>
            <App />
        </Router>,
        document.getElementById('app')
    );
}