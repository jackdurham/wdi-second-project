const mongoose = require('mongoose');
mongoose.Promise= require('bluebird');

const {dbURI} = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Game = require('../models/game');
const User = require('../models/user');

Game.collection.drop();
User.collection.drop();

User
  .create([
    {
      username: 'ben',
      email: 'ben@ga.co',
      password: 'pass',
      passwordConfirmation: 'pass'
    },
    {
      username: 'jack',
      email: 'jack@ga.co',
      password: 'pass',
      passwordConfirmation: 'pass'
    },
    {
      username: 'will',
      email: 'will@ga.co',
      password: 'pass',
      passwordConfirmation: 'pass'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created!`);

    return Game
      .create([{
        name: 'Fallout 3',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: '8',
        image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg',
        createdBy: users[0]._id
      },{
        name: 'Fallout 3',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: '8',
        image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg',
        createdBy: users[1]._id

      },{
        name: 'Fallout 3',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: '8',
        image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg',
        createdBy: users[1]._id
      },{
        name: 'Fallout 3',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: '8',
        image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg',
        createdBy: users[1]._id
      },{
        name: 'Fallout 3',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: '8',
        image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg',
        createdBy: users[1]._id
      },{
        name: 'Fallout 3',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: '8',
        image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg',
        createdBy: users[1]._id
      }]);
  })
  .then(games => {
    console.log(`${games.length} games were added!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });





// Game
//   .create([{
//     name: 'Fallout 3',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     rating: '8',
//     image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
//   },{
//     name: 'Fallout 3',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     rating: '8',
//     image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
//
//   },{
//     name: 'Fallout 3',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     rating: '8',
//     image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
//   },{
//     name: 'Fallout 3',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     rating: '8',
//     image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
//   },{
//     name: 'Fallout 3',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     rating: '8',
//     image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
//   },{
//     name: 'Fallout 3',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     rating: '8',
//     image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg'
//   }])
//   .then((game) => {
//     console.log(`${game.length} game added!`);
//   })
//   .then(() => {
//     return User
//       .create([
//         {
//           username: 'ben',
//           email: 'ben@ga.co',
//           password: 'pass',
//           passwordConfirmation: 'pass'
//         }
//       ]);
//   }
//
//   )
//   .then(users => {
//     console.log(`${users.length} users added!`);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });
