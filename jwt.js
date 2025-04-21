const jwt = require('jsonwebtoken');

const token = jwt.sign(
    { 
        id: '123' ,
         name: 'John Doe',
         age: 30, 
         email: 'john@gmail.com'
 }, 'chave-super-secreta', { expiresIn: '1h' });

console.log("🚀 ~ token:", token)



