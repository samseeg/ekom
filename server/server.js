require('dotenv').config();
const express = require("express"),
  session = require("express-session"),
  massive = require("massive"),
  bodyParser = require("body-parser"),
  passport = require("passport");

const app = express();

app.use(bodyParser.json());

// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

const controller = require('./controllers/controller');

app.get('/items', controller.getItems);
app.post('/createitem', controller.createItem);
app.delete('/deleteitem/:id', controller.deleteItem);


const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
