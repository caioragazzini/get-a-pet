const mongoose = require('mongoose');
const UserSchema = require('./user');
const PetSchema = require('./pet');


const Pet = mongoose.model('Pet', PetSchema);
const User = mongoose.model('User', UserSchema);



const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅ Conexão com o MongoDB estabelecida com sucesso!');  
    }
    catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB:', error);
    }   
  }

  module.exports = {
    connect,
    User,
    Pet,
   
}