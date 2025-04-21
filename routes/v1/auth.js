const express = require('express');
const { logger } = require('../../utils');
 
const  logaUsuario  = require('../../services/loga-usuario');

const router = express.Router();   

router.post('/', async(req, res)=>{
    try{
        const { email, senha } = req.body;

        const jwt = await logaUsuario(email, senha);
        console.log("🚀 ~ router.post ~ jwt:", jwt)
        res.status(200).json({
            sucesso: true,
            jwt: jwt,
        });

    }catch(e){
        logger.error(`Erro na autenticação: ${e.message}`);

        if (e.message.match('confirmado')) {

            res.status(401).json({
                sucesso: false,
                erro: e.message,
    
            });
        } else {

            res.status(401).json({
                sucesso: false,
                erro: 'Email ou senhas invalidos'
    
            });
        }
       
    }
});


module.exports = router;




