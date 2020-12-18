# Noissy

Hello! Welcome to Noissy github repo! Are you interested to helping us for developing Noissy? You are very welcome!

*Main Contributor:*
- [@blackjac7](https://github.com/blackjac7 "@blackjac7")

- [@Ralfarios](https://github.com/blackjac7 "@Ralfarios")

## Before you start
You need [Node.js](https://nodejs.org/en/ "Node.js") to start developing this app.

### DB Scheme
![Scheme Pair Project](https://i.imgur.com/dFDjdfo.jpg)
> Revision => in `ChatRooms` tables, there is a column named chatroomname

## Let's get started

1. FIRST, clone this repo > `$ git clone https://github.com/Ralfarios/noissy/`
2. SECOND, change dir to your repo dir > `$cd noissy`
3. AND LASTLY, install the packages > `$npm install`

Run it with nodemon or whatever.

>if you want to check, visit [http://localhost:3000](http://localhost:3000 "http://localhost:3000")

## Router
| Router               | Method        | Description             |
|:-------------------- |:------------- |:----------------------- |
| `'/'`                | `GET`         | Show the Landing Page   |
| `'/login`            | `GET`         | Show the Login Form     |
| `'/login`            | `POST`        | Login session           |
| `'/signup`           | `GET`         | Show the Register Form  |
| `'/signup`           | `POST`        | Create account          |
| `'/about`            | `GET`         | Show the about page     |
| `'/logout`           | `GET`         | Logout session          |
| `'/chat=:id`         | `GET`         | Show the chat room list |
| `'/chat=:id`         | `POST`        | Find the chat room      |
| `'/addroom`          | `POST`        | Create the chat room    |
| `'/joinchat/:id`     | `POST`        | Join the chat room      |
| `'/chat=:id/:roomid` | `GET`         | Show the chat room      |

## Something used

<img src="https://nodejs.org/static/images/logo.svg" width="96"><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" width="48">

## Demo
Visit this one to see what [Noisy](https://guarded-anchorage-54256.herokuapp.com/ "Noisy") is.

## Credit
Special thanks to [NES.css](https://nostalgic-css.github.io/NES.css/ "NES.css") for letting us using their css template. ❤❤❤
