const { Schema } =require('mongoose');    

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    image: {
        type: String,       
    },
    phone: {
        type: String,
        required: true,
    },
    

}, { timestamps: true });


module.exports = UserSchema;
