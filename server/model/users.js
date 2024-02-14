const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name : String,
    email:String,
    password:String,
    phone:Number,
    add : String
});

const user = new mongoose.model('users',userschema);
module.exports=user;