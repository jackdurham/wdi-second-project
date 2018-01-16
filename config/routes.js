const express = require('express');
const router = express.Router();
const game = require('../controllers/games');
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
  .get(game.index)
  .post(game.create);
router.route('/games/new')
  .get(secureRoute, game.new);
router.route('/games/:id')
  .get(game.show)
  .put(game.update)
  .delete(game.delete);
router.route('/games/:id/edit')
  .get(secureRoute, game.edit);

router.route('/games/:id/comments')
  .post(game.createComment);

router.route('/games/:id/comments/:commentId')
  .delete(game.deleteComment);

module.exports = router;
