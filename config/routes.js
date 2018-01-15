const express = require('express');
const router = express.Router();
const Game = require('../controllers/games');
const statics = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

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

router.route('/games')
  .get(Game.index)
  .post(Game.create);
router.route('/games/new')
  .get(secureRoute, Game.new);
router.route('/games/:id')
  .get(Game.show)
  .put(Game.update)
  .delete(Game.delete);
router.route('/games:id/edit')
  .get(secureRoute, Game.edit);

module.exports = router;
