const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserorderSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    number:{
        type:String,
        require:true
    },
    model:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    carname:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('order',UserorderSchema)