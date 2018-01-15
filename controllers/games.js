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
    .exec()
    .then((game) => {
      if(!game) return res.status(404).send('Not found');
      res.render('games/show', { game });
    })
    .catch((err) => {
      res.staus(500).render('error', { err });
    });
}

function gamesCreate(req, res) {
  Game
    .create(req.body)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function gamesEdit(req, res) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.status(404).send('Not found');
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

module.exports = {
  index: gamesIndex,
  new: gamesNew,
  show: gamesShow,
  create: gamesCreate,
  edit: gamesEdit,
  update: gamesUpdate,
  delete: gamesDelete
};
