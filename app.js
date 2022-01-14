const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const session = require("express-session");
const passport = require('./utils/passport');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'myProject', resave: false, saveUninitialized: false }))
app.use(passport.initialize());
app.use(passport.session());


require("./routes/router")(app);

app.listen(port, () => {
    console.log('app is running!')
});