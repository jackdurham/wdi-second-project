const Game = require('../models/game');

function gamesIndex(req, res) {
  Game
    .find()
    .exec()
    .then((game) => {
      res.render('games/index', { game });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function gamesNew(req, res){
  res.render('games/new');
}

function gamesShow(req, res){
  Game
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((game) => {
      if(!game) return res.status(404).send('Not found');
      res.render('games/show', { game });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function gamesCreate(req, res) {
  req.body.createdBy = req.user;

  Game
    .create(req.body)
    .then(() => {
      res.redirect('/games');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function gamesEdit(req, res) {
  Game
    .findById(req.params.id)
    .then((game) => {
      res.render('games/edit', { game });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function gamesUpdate(req, res) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.status(404).send('Not found');

      game = Object.assign(game, req.body);

      return game.save();
    })
    .then((game) => {
      res.redirect(`/games/${game.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function gamesDelete(req, res) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.status(404).send('Not found');

      return game.remove();
    })
    .then(() => {
      res.redirect('/games');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function createCommentRoute(req, res, next) {
  req.body.createdBy = req.user;

  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();

      game.comments.push(req.body);
      return game.save();
    })
    .then((game) => {
      res.redirect(`/games/${game.id}`);
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/games/${req.params.id}`, err.toString());
      }
      next(err);
    });
}

function deleteCommentRoute(req, res, next) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();

      const comment = game.comments.id(req.params.commentId);
      comment.remove();

      return game.save();
    })
    .then((game) => {
      res.redirect(`/games/${game.id}`);
    })
    .catch(next);
}

module.exports = {
  index: gamesIndex,
  new: gamesNew,
  show: gamesShow,
  create: gamesCreate,
  edit: gamesEdit,
  update: gamesUpdate,
  delete: gamesDelete,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
