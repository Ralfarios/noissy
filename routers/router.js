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

router.get('/chat=:id', Controller.getChatList);
router.post('/chat=:id', Controller.postChatList)

router.post('/addroom', Controller.postaddChatRoom);
router.post('/joinchat/:id', Controller.joinChatRoom);

router.get('/chat=:id/:roomid', Controller.getChatRoom);


module.exports = router;