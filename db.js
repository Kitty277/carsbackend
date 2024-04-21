const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://vaishnavi:Vaish74@cluster0.sub1m7a.mongodb.net/' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull') 
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose