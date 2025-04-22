require('dotenv').config()

const express = require('express');
const passport = require('passport');
const session = require('express-session');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//configurando a autenticação
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave : false,
  saveUninitialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

// declarando rotas
app.use('/', router);

// caso nenhuma rota de match, redireciona para a 404
app.use(function(_req, _res, next) {
  next(createError(404));
});

//configurando a autenticação
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

// error handler middleware de erro
app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  res.json({
    sucesso: false,
    erro: err.message,
  });
});

module.exports = app;

