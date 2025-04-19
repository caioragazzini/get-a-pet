const { Schema } =require('mongoose');    

const PetSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
       
    },
    available: {
        type: Boolean,      
    },
    user: Object,
    adopter: Object,

}, { timestamps: true });


module.exports = PetSchema;
