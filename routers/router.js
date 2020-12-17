const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));

router.get('/login', (req, res) => res.render('login'));

router.get('/signup', (req, res) => res.render('register'));

router.get('/about', (req, res) => res.render('about'));

router.get('/chat', (req, res) => res.send('CHAT LIST PAGE'));

router.get('/chat/:id', (req, res) => res.render('chatroom'));

module.exports = router;