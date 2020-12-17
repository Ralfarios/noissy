const router = require('./routers/router.js');

const express = require('express');
const session = require('express-session');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const port = 3000 || process.env.port;
const server = http.createServer(app);
const io = socketio(server);

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

// Run when client connects
io.on('connection', socket => {
  console.log('New client connection..');
})

// Router
app.use('/', router);

// Listener
server.listen(port, () => console.log(`Noissy Chat is successfully executed on port: ${port}.`));