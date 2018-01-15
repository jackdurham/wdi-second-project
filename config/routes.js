const router = express.Router();
const express = require('express');
const Game = require('..controllers/games');
const statics = require('..controllers/static');
const registrations = ('..controllers/registrations');
const sessions = ('..controllers/sessions');

function secureRoute(req, res, next) {
  if(!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in to view this page');
      res.redirect('/login');
    });
  }
  return next();
}

router.get('/', (req, res) => res.render('index'));

router.route('/games')
  .get(Game.index)
  .post(Game.create);

router.route('/games/new')
  .get(secureRoute, Game.new);

router.route('/games/:id')
  .get(Game.show)
  .put(Game.updte)
  .delete(Game.delete);

router.route('/games:id/edit')
  .get(secureRoute, Game.edit);

router.route('/')
  .get(statics.index);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/secret')
  .get(secureRoute, statics.secret);

module.exports = router;
