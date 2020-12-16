const express = require('express');
const router = require('./routers/router.js');
const app = express();
const port = 3000;

// View Engine
app.set('view engine', 'ejs');

// Body Parser
app.use(express.urlencoded({ extended: true }));

// Router
app.use('/', router);

// Listener
app.listen(port, () => console.log(`Noissy Chat is successfully executed on port: ${port}.`));