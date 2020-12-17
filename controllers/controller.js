const { User, ChatRoom, UserChatRoom } = require('../models/index');
const { comparePass } = require('../helpers/hashPass.js');

class Controller {
  static homePage(req, res) {
    console.log(req.session);
    res.render('index');
  };

  static signUpForm(req, res) {
    res.render('register');
  };

  static signUp(req, res) {
    let input = {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    };

    User.create(input)
      .then(data => {
        res.redirect('/login')
      })
      .catch(err => {
        // console.log(err);
        let errMsg = [];
        if (err.errors) {
          err.errors.forEach(e => {
            errMsg.push(e.message);
          });
        } else {
          errMsg.push(err);
        };
        // console.log(err.errors);
        res.send(errMsg);
      });
  };

  static loginForm(req, res) {
    res.render('login');
  };

  static login(req, res) {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then(data => {
        if (data && comparePass(password, data.password)) {
          req.session.email = email;
          res.redirect('/chat');
        } else {
          throw 'Invalid Password';
        }
      })
      .catch(err => res.send(err))
  };

  static getChatList(req, res) {
    
    let room = null
    ChatRoom.findAll()
    .then(data => {
      room = data;
      return User.findAll()
    }).then(user => {
      res.render('chatlist', { room, user });
    }).catch(err => {
      res.send(err.message);
    })
    
  };

  static postChatList(req, res) {
    const newUserChatRoom = {
      UserId: +req.body.userName,
      ChatRoomId: +req.body.chatroomname

    }
    UserChatRoom.create(newUserChatRoom)
      .then(data => {
          res.redirect(`/chat/${newUserChatRoom.ChatRoomId}`);
      }).catch(err => {
        res.send(err.message)
      })
  };

  static getChatRoom(req, res) {
    res.render('chatroom', );
  }

  static logout(req, res) {
    delete req.session.email;
    res.redirect('/');
  };
};

module.exports = Controller;