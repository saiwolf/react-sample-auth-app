# Node + Mongo - Boilerplate API with Email Sign Up, Verification, Authentication & Forgot Password

This is a fork of the [Node + MongoDB Signup Verification API](https://github.com/cornflourblue/node-mongo-signup-verification-api) project by Jason Watmore ([@cornflourblue](https://github.com/cornflourblue)) with customizations on my part.

It offers Verification Emails on sign up, Forgot and Reset Password functionality and JWT authentication.

This API also has a [Swagger](https://swagger.io/) endpoint at `/api-docs`

## Differences

1. [Morgan](https://github.com/expressjs/morgan) logger for ExpressJS is used.
2. The `cors()` module is explicitly set up to use `http://localhost:8082` as the only allowed origin.
3. The `cors()` module is configured to use `credentials: true` to make CORS Pre-flight requests work.

## Installation

Clone this repo.

```bash
git clone https://github.com/saiwolf/react-sample-auth-app.git
cd react-sample-auth-app
```

You can either use `npm` or `yarn` to restore packages.

```bash
cd backend
npm
```

or

```bash
cd backend
yarn
```

## Usage

### Setting up MongoDB

You'll need a running instance of MongoDB.

```bash
mongod --dbpath=./data &
```

### Setting Config Values

Rename `config.defaults.json` to `config.json` and edit the file to suit your environment. The file contains instructions inside.

A real easy way to handle email is with [Ethereal Email](https://ethereal.email/). Just click on 'Create Account' and you're off!

## Running

Ensure you're in the `backend` directory.

```bash
yarn start
```

## Further Information

See the [original article](https://jasonwatmore.com/post/2020/05/13/node-mongo-api-with-email-sign-up-verification-authentication-forgot-password) on Jason Watmore's site for an in-depth look on how this api works.
