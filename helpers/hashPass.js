const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

let hashPass = (password) => bcrypt.hashSync(password, salt);

let comparePass = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = { hashPass, comparePass };