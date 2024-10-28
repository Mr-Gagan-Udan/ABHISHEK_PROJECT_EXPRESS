const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_ACCESS_SECRET,
};

module.exports = (passport) => {
    passport.use(
        new Strategy(options, async (jwt_payload, done) => {
            try {
                const user = await User.findById(jwt_payload.id);
                return user ? done(null, user) : done(null, false);
            } catch (error) {
                return done(error, false);
            }
        })
    );
};
