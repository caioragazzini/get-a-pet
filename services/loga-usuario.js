const { User }  = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const logaUsuario = async (email, senha) => {

    if(!email || !senha){
        throw new Error('Campo senha e email são obrigatorios')
    }
    const usuario = await User.findOne({email:email}).select('password email');

   
    if(!usuario){
        throw new Error('Usuário não encontrado');          
    }
    if(!await bcrypt.compare(senha, usuario.password)){
        throw new Error('Senha inválida')

    }
    return jwt.sign(
        { 
            id: usuario._id,
            name: usuario.name,
            email: usuario.email,
        }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
   };




   
module.exports = logaUsuario;
