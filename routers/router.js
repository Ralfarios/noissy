const Controller = require('../controllers/controller.js');
const auth = require('../helpers/auth.js');

const express = require('express');
const router = express.Router();


router.get('/', Controller.homePage);
router.get('/login', Controller.loginForm);
router.post('/login', Controller.login);

router.get('/signup', Controller.signUpForm);
router.post('/signup', Controller.signUp);

router.get('/about', (req, res) => res.render('about'));

router.get('/logout', Controller.logout);

router.use(auth);

router.get('/chat', Controller.chatList);

router.get('/chat/:id', (req, res) => res.render('chatroom'));


module.exports = router;