const mongoose=require('mongoose');

const JokeSchema=new mongoose.Schema({
    titulo:String,
    setup:{
        type:String,
        required:[true,'el nombre es requerido']
    },
    punchline:String,
    nuevaPropiedad:String
    
})

const Joke=mongoose.model("Joke",JokeSchema); //esto no lo entiendo muy bien ¿?
module.exports=Joke;