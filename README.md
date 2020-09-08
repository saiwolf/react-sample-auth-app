# React Sample Auth App

This repo is a fork of [Jason Watmore](https://jasonwatmore.com/) ([@cornflourblue](https://github.com/cornflourblue)) 's Node + MongoDB Auth API and his React Signup Verification Boilerplate client; customized by me.

## [License](LICENSE)

Like the original repos, this project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

## Installation

Both the `backend` and `frontend` folders each have their own README files.

## A Note about Aliases

In Jason's posts mentioned above and below, he uses an `@` as an alias for the `src/` directory.

 I have decided to eschew this setting, as VS Code's intellisense doesn't work with it, and it always gives me grief.

### An Example of Alias Use

```javascript
import { accountService } from '@/_services';
```

### Re-enabling the Alias feature

If you wish to re-enable this, then open up `frontend/webpack.config.js` and find the following line:

```javascript
resolve: {
    mainFiles: ['index', 'Index'],
    extensions: ['.js', '.jsx']
},
```

And make it look like this, adding the `alias` directive:

```javascript
resolve: {
    mainFiles: ['index', 'Index'],
    extensions: ['.js', '.jsx'],
    alias: {
        '@': path.resolve(__dirname, 'src/'),
    }
},
```

## Original Articles

* The API: [Node + MongoDB Signup Verification API](https://github.com/cornflourblue/node-mongo-signup-verification-api)

* The Front-end Client: [React Signup Verification Boilerplate](https://github.com/cornflourblue/react-signup-verification-boilerplate)