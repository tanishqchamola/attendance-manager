const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("./key");

module.exports = (passport) => {

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });
    
    passport.use(
        new GoogleStrategy(
            {
                clientID: keys.google.clientID,
                clientSecret: keys.google.clientSecret,
                callbackURL: "/auth/google/redirect",
            },
            function (accessToken, refreshToken, profile, done) {
                done(null, profile.id);
            }
        )
    );

    
};
