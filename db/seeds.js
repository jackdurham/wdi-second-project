const mongoose = require('mongoose');
mongoose.Promise= require('bluebird');

const databaseURL = 'mongodb://localhost/restful-routing-hw';
mongoose.connect(databaseURL);

const Game = require('../models/game');

Game.collection.drop();

Game
  .create([{
    name: 'Fallout 3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: '8',
    image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
  },{
    name: 'Fallout 3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: '8',
    image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'

  },{
    name: 'Fallout 3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: '8',
    image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
  },{
    name: 'Fallout 3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: '8',
    image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
  },{
    name: 'Fallout 3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: '8',
    image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
  },{
    name: 'Fallout 3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: '8',
    image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
  }])
  .then((game) => {
    console.log(`${game.length} game added!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
