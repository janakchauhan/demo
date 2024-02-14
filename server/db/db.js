const mongoose =require('mongoose');

const db = mongoose.connect("mongodb://127.0.0.1:27017/users").then(()=>{
    console.log("database connected");
    console.log("database connected");
});

module.exports= db;