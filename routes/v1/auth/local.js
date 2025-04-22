const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},async (email, password, done) => {
        try {
            const user = await User.findOne({ email }).select('+password');
            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            }   
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }
        }catch (error) {
            return done(error);
        }

        return done(null, user);
    }
));

//salva na sessão o usuario
passport.serializeUser((usuario, done)=>{
    done(null, usuario._id);
});

//recuperando da sessão o usuario
passport.deserializeUser( async(id, done)=>{
    let err, usuario;
    try{
        usuario = await User.findById(id);

    } catch(err){
        err = err;
    }
    done(err, usuario);

});