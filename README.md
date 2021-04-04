# CRA Fullstack Pro Template

A custom CRA template for fullstack React apps.

## Installation and Setup

To get started with this CRA template, do the following:
1. Run `npx create-react-app <project-name> --template cra-template-fullstack-pro`
2. `cd` into the project directory and you're all good to go!


## Dependencies Included

- Backend Dependencies (express, body-parser, cors, path)
- Frontend Dependencies (redux, react-redux, redux-thunk, bootstrap)
- Dev Dependencies (jest, nodemon, concurrently)
- General purpose (axios, dotenv, fs)

## Run Scripts Included

- `start` (Starts up the web-server for Heroku deployment)
- `client` (Starts the client side)
- `server` (Starts up the server-side)
- `dev` (Uses concurrently to start both the server and client side at the same time for fullstack development)
- `test` (Runs jest to complete all test cases)
- `heroku-postbuild` (Builds the client-side for Heroku to serve up)

## Folder Structure

```
<project-name>
│ └───public
│     │   ... 
│ └───server 
│     └───config
│     └───controllers
│     └───models
│     └───routes
│     └───services
│     │   index.js
│     │   package.json
│ └───src
│     └───assets
│     └───components
│     └───containers
│     └───redux
│     │   index.js
│   package.json
│   LICENSE
│   README.md

```

## About

The CRA-Fullstack-Pro template was built by [Harshith Latchupatula](https://github.com/harshithl1777).