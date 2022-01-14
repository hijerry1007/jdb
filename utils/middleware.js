const passport = require("../utils/passport");

const authenticatedJWT = passport.authenticate('jwt', { session: false });

module.exports = { authenticatedJWT };