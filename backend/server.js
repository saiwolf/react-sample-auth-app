require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./_middleware/error-handler');
const morgan = require('morgan');
const config = require('./config');
const clientUrl = config.clientUrl || 'http://localhost:8080';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: clientUrl,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various smart TVs) choke on 204
    credentials: true
}));

app.use(morgan('dev'));

// api routes
app.use('/accounts', require('./accounts/accounts.controller'));

// swagger docs route
app.use('/api-docs', require('_helpers/swagger'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
    console.log('Connections allowed from: ' + clientUrl);
});