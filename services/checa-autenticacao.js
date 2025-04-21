const { User }  = require('../models');
const jwt = require('jsonwebtoken');

const checaAutenticacao = async(req, res, next)=>{
    try{
    const token = req.headers.authorization.replace('Bearer ', '');
    const email = (await jwt.verify(token, process.env.JWT_SECRET_KEY)).email;
    console.log("🚀 ~ checaAutenticacao ~ email:", email)

    const usuario = await User.findOne({email: email});

    console.log("🚀 ~ checaAutenticacao ~ usuario:", usuario)
    if(!usuario){
            throw 'Usuario não encontrado';
        }   
        
        req.usuario = usuario;


    next();
    }catch(e){  
        return res.status(401).json({erro:'Token inválido'});
    }
    
};

module.exports = { checaAutenticacao };