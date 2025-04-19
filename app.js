require('dotenv').config()

const express = require('express');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// declarando rotas
app.use('/', router);

// caso nenhuma rota de match, redireciona para a 404
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler middleware de erro
app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  res.json({
    sucesso: false,
    erro: err.message,
  });
});

module.exports = app;

