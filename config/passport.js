//importing passport local strategy
const LocalStrategy = require("passport-local").Strategy;

//importing bcypt to fompasre password in hashed format
const bcrypt = require('bcrypt')

const User = require("../models/user");

//initializing passport
exports.initializingPassport = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          return done(null, false, { message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid username or password" });
        }
      } catch (err) {
        return done(err);
      }
    })
  );

  //serializing passport
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //deserializing passport
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};


//making authenticateed function
exports.isAuthenticated = (req, res, next) => {
  if (req.user) return next();
  res.redirect("/login");
};
