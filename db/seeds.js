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
        review: 'Its rare that a game can hit the mark in so many different and often conflicting areas. Fallout 3 offers freedom without sacrificing a focused story. It delivers fantastic combat without forgoing a deep role-playing system. The characters you meet are engaging and oftentimes hilarious without feeling out of place in this harsh world. The game has a few flaws -- most of them technical -- but its a case where the whole is greater than the sum. Its a fantastic game with incredible atmosphere that offers fun in so many different ways that youre almost sure to get hooked.',
        rating: '9.6',
        image: 'https://the-games-blog.com/wp-content/uploads/2010/02/Fallout-3-GOTY-Box-Art.jpg',
        createdBy: users[0]._id
      },{
        name: 'Red Dead Redemption',
        review: 'Red Dead Redemption is a must-play game. Rockstar has taken the Western to new heights and created one of the deepest, most fun, and most gorgeous games around. You can expect the occasional bug or visual hiccup, but you can also expect a fantastic game that offers the Western experience weve all been waiting for. Red Dead Redemption is a complete game in every sense -- both the single player and multiplayer modes are excellent -- and still manages to offer an attention to detail you rarely see from a game of this scope.',
        rating: '9.7',
        image: 'https://media.rockstargames.com/rockstargames/img/global/news/upload/rockstarwarehouse_2113_220630.jpg',
        createdBy: users[1]._id

      },{
        name: 'Need For Speed Underground 2',
        review: 'While NFSU2 contains some aspects of its predecessor, several major changes make a significantly different game. The world is massive and open, filled with many more courses that before. The progression scheme is complex and youll find yourself winning to earn money so you can spend it on modding the heck out of your car over and over again. The cars are more weighty and a little more realistic too, requiring a little more skill from the driver.',
        rating: '9.1',
        image: 'https://pcgamingwiki.com/images/thumb/1/1a/Need_for_Speed_Underground_2_cover.jpg/300px-Need_for_Speed_Underground_2_cover.jpg',
        createdBy: users[1]._id
      },{
        name: 'Crash Bandicoot N. Sane Trilogy',
        review: 'I didn’t want the Crash Bandicoot: N. Sane Trilogy to break what wasn’t broken. Thankfully, Vicarious Visions clearly didn’t want to either, and the studio’s reverence for the original maddening yet rewarding challenges that still remain fun is clearly on display. On one hand, that leads to the frustrating limitations of the original Crash Bandicoot persisting 20 years later. But it also results in the incredible visual and aural overhaul and the gameplay tweaks to earlier entries, like time trials and crate counters, that Naughty Dog added later in the series. Those additions make the overall package so much more cohesive while never forgetting what made, and what still makes, so much of Naughty Dog’s original trilogy a blast to play.',
        rating: '8.5',
        image: 'https://cdn.alzashop.com/Foto/f9_rect/MS/MSX399.jpg',
        createdBy: users[1]._id
      },{
        name: 'The Last Of Us Remastered',
        review: 'In 2013, I called The Last of Us on PlayStation 3 a masterpiece. The same holds true of its PlayStation 4 "Remastered" sibling. You can’t go wrong with either version, but with Remastered you’ll get a better framerate that smooths out gunplay, a prettier, sharper look, and a bunch of DLC content rolled into the package from the get-go (not to mention a whole fresh set of Trophies to earn again, if you have a whole lot of time on your hands).',
        rating: '10',
        image: 'http://psmedia.playstation.com/is/image/psmedia/the-last-of-us-remastered-two-column-01-ps4-us?$TwoColumn_Image$',
        createdBy: users[1]._id
      },{
        name: 'The Witcher 3',
        review: 'Though the straightforward and fetch-quest-heavy main story overstays its welcome, the option of joyfully adventuring through a rich, expansive open world was always there for me when I’d start to burn out. Even if the plot isn’t terribly interesting, the many characters who play a part in it are, and along with the excellent combat and RPG gameplay, they elevate The Witcher 3 to a plane few other RPGs inhabit.',
        rating: '9.3',
        image: 'https://cf1.s3.souqcdn.com/item/2015/05/07/82/53/73/9/item_XL_8253739_7807523.jpg',
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
