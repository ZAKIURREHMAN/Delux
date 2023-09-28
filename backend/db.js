const  mongoose = require('mongoose')

const URL = 'mongodb+srv://zaki:zaki1122@cluster0.kozmyev.mongodb.net/'
const mongostocennect = ()=>{
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },()=>{
        console.log("Successfully connect")
    })
}
module.exports = mongostocennect