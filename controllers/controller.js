const { User, ChatRoom, UserChatRoom } = require('../models/index');
const { comparePass } = require('../helpers/hashPass.js');


class Controller {
  static homePage(req, res) {
    // console.log(req.session);
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
      .then(() => res.redirect('/login'))
      .catch(err => {
        // console.log(err);
        let errMsg = [];
        if (err.errors) {
          err.errors.forEach(e => errMsg.push(e.message));
        } else {
          errMsg.push(err);
        };
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
          res.redirect(`/chat=${data.id}`);
        } else {
          throw 'Invalid Password';
        }
      })
      .catch(err => res.send(err))
  };

  static getChatList(req, res) {

    let user;
    User.findAll({ where: { id: +req.params.id } })
      .then(data => {
        user = data;
        return UserChatRoom.findAll({ where: { UserId: +req.params.id }, include: [ChatRoom] })
      })
      .then(data => res.render('chatlist', { user, data }))
      .catch(err => res.send(err.message));
  };

  static postChatList(req, res) {
    const chatRoom = {
      UserId: +req.body.userid,
      ChatRoomId: +req.body.chatroomid
    }

    UserChatRoom.findByPk(chatRoom.ChatRoomId)
      .then(data => {
        console.log(data);
        res.redirect(`/chat=${UserId}/${chatRoom.ChatRoomId}`);
      }).catch(err => res.send(err.message))
  };

  static postaddChatRoom(req, res) {
    const newChatRoom = {
      chatroomname: req.body.chatroomname
    }
    const paramId = +req.body.userid

    ChatRoom.create(newChatRoom)
      .then(data => UserChatRoom.create({ ChatRoomId: data.id, UserId: paramId }))
      .then(() => res.redirect(`/chat=${paramId}/`))
      .catch(err => res.send(err));

  };

  static joinChatRoom(req, res) {
    const roomName = req.body.roomName
    const userId = +req.params.id;

    ChatRoom.findAll({ where: { chatroomname: roomName }, include: [UserChatRoom] })
      .then(data => res.redirect(`/chat=${userId}/${data[0].id}`))
      .catch(err => res.send(err));
  };

  static getChatRoom(req, res) {
    let roomid = +req.params.roomid;
    let id = +req.params.id;

    UserChatRoom.findAll({ where: { ChatRoomId: roomid }, include: [User, ChatRoom] })
      .then(data => res.render('chatroom', { data, id }))
      .catch(err => res.send(err));
  };

  static logout(req, res) {
    delete req.session.email;
    res.redirect('/');
  };
};

module.exports = Controller;