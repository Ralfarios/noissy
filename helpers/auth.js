let auth = (req,res, next) => {
    req.session.email ? next() : res.redirect('/');
};

module.exports = auth;