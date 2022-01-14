const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportJWT = require('passport-jwt')
const bcrypt = require("bcryptjs");
const User = require("../model/User");

passport.use(new LocalStrategy(async (username, password, done) => {

    const user = await User.findByName(username);
    //查無用戶
    if(!user) {
        return done(null, false);
    }

    //密碼錯誤
    if(!bcrypt.compareSync(password, user.password)) {
        return done(null, false);
    }

    return done(null, user);
}));


passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

//JWT
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

let strategy = new JwtStrategy(jwtOptions, async (jwt_payload, next) => {
    const user = await User.findById(jwt_payload.id);
    if (!user) return next(null, false);
    return next(null, user);
});

passport.use(strategy);

module.exports = passport;