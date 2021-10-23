const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const path = require('path');
// const fs = require('fs');
// const mongoose = require('mongoose');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const conn = require('./Config/db');
// const routes = require('./Routes/index');
// const User = require('./Models/users.model');
// const bcrypt = require('bcrypt');
const AuthRoute = require('./Routes/auth.route');

const app = express();

// app.use("^/$", (req, res, next) => {
//   fs.readFile(path.resolve("./Client/build/index.html"), "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send("error reading index.html");
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString('<App />')}</div>`
//       )
//     );
//   });
// });

// app.use(express.static(path.resolve(__dirname, '.', 'Client', 'build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', AuthRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});