const express = require('express');
const db = require('./db/db');
const cors = require('cors')
const app = express()
const users = require('./controller/users');
const port = process.env.port || 7000;


//middleware
app.use(express.json());
app.use(cors())
//apis

app.post('/signup',users.signup);
app.post('/login',users.login);

//port 
app.listen(port,()=>{
    console.log("port is running on " + port);
});