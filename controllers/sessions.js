const User = require('../models/user');

function newRoute(req, res) {
  res.render('sessions/new');
}

function createRoute(req, res) {
  console.log(req.body);

  User
    .findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).render('sessions/new', { message: 'User not recognised' });
      }

      req.session.userId = user.id;
      req.user = user;
      req.flash('info', `Hey there, ${user.username}!!`);
      res.redirect('/games/new');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
}

function deleteRoute(req, res) {
  return req.session.regenerate(() => {
    res.redirect('/');
  });
}
module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
