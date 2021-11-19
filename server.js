const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const fs = require('fs');
const session = require("express-session");
const cookieParser = require("cookie-parser");

const conn = require('./Config/db');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const localAuthStrategy = require('./Config/passport.local');

const AuthRoute = require('./Routes/auth.route');

const env = require('./Config/index');
const { SESSIONSECRET } = env;

const app = express();

//SSR
app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./Client/build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("error reading index.html");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString('<App />')}</div>`
      )
    );
  });
});
app.use(express.static(path.resolve(__dirname, '.', 'Client', 'build')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: SESSIONSECRET,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false
}));

//PASSPORT
app.use(passport.initialize());
app.use(passport.session());

//ROUTES
app.use('/auth', AuthRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});