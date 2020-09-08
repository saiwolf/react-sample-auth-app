# React JWT Authentication Sample App

This is a fork of the [React Signup Verification Boilerplate](https://github.com/cornflourblue/react-signup-verification-boilerplate) project by Jason Watmore ([@cornflourblue](https://github.com/cornflourblue)) with customized styling.

It offers Verification Emails on sign up, Forgot and Reset Password functionality and JWT authentication.

## Differences

1. SCSS instead of LESS
2. A generic `<Home />` component is rendered for guest users, instead of the login screen.
3. The `<Nav />` component is always shown, showing different links for guests and registered users.

## Installation

You can either use `npm` or `yarn` to restore packages.

```bash
npm install
```

or

```bash
yarn add
```

## Usage

### Prerequsites

Make sure the [backend](../backend/README.md) is running first!

```bash
cd ../backend
yarn start
```

## Running

Ensure you're in the `frontend` directory.

```bash
yarn start
```
