const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'el nombre es requerido']
    },
    email:String,
    password:String,
    birthday:Date,
    comments:String,
},{timestamp:true})

const User=mongoose.model("User",UserSchema); //esto no lo entiendo muy bien ¿?
module.exports=User;