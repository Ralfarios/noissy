const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.send('LANDING PAGE'));

router.get('/login', (req,res) => res.send('LOGIN PAGE'));

router.get('/signup', (req,res) => res.send('SIGN UP PAGE'));

router.get('/chat', (req,res) => res.send('CHAT LIST PAGE'));

router.get('/chat/:id', (req,res) => res.send('CHAT ROOM PAGE'));

module.exports = router;