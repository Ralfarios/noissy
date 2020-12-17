const router = require('./routers/router.js');

const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

// Session
app.use(session({
  secret: 'crazynoissybizzaretown',
  resave: false,
  saveUninitialized: false,
}));

// View Engine
app.set('view engine', 'ejs');

// Body Parser
app.use(express.urlencoded({ extended: true }));

// Router
app.use('/', router);

// Listener
app.listen(port, () => console.log(`Noissy Chat is successfully executed on port: ${port}.`));