const express = require('express');
const cors = require('cors');


 

// configurando cors
const corsOptions = {
    origin :'*',
    optionsSuccessStatus : 200,
}

//importando routes
const authRouter = require('./auth');   
const statusRouter = require('./status');

//importando middlewares
const { checaAutenticacao } = require('../../services/checa-autenticacao');


const router = express.Router();
router.use(express.json());


//declarar as rotas
 router.use('/auth',cors(corsOptions),authRouter);
 router.use('/status',cors(corsOptions),checaAutenticacao, statusRouter);

module.exports = router;