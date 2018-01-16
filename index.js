const express        = require('express');
const morgan         = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const routes         = require('./config/routes');
const mongoose       = require('mongoose');
const { port, env, dbURI } = require('./config/environment');
mongoose.Promise     = require('bluebird');
mongoose.createConnection(dbURI);
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const User = require('./models/user');
const app = express();
if(env === 'devlopment') app.use(morgan('dev'));



mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'Shh its a secret',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
  if (!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .exec()
    .then((user) => {
      if(!user) {
        return req.session.regenerate(() => {
          res.redirect('/');
        });
      }

      req.user = user;
      res.locals.user = user;
      res.locals.isLoggedIn = true;
      next();
    });
});

app.use(routes);

app.listen(port, () => console.log(`Express is listening to port ${port}`));
