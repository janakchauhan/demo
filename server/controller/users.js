const user = require('../model/users.js');
const bcrypt= require('bcrypt')

const signup = async(req,res)=>{
    try{
        const {name,email,password,phone,add}= req.body;
        const pass=  await bcrypt.hash(password,5);
        const data = await user.create({
            name:name,
            email:email,
            password:pass,
            phone:phone,
            add:add
        });
        console.log(req.body);
        if(data.email)
        {
            res.send("ragistration successful");
        }
        else{
            res.send("error while ragistration");
        }
        res.send(data);
    }catch(e){
        console.log(e);
    }  
};
const login = async(req,res)=>{
    console.log(req.body)
    try{
        const {email,password} = req.body;
        const data = await user.findOne({email:email});
        if(data)
        {
            if(await bcrypt.compare(password,data.password))
            {
                res.send("Login Successful!")
            }
            else{
                res.send("Password is incorrect")
            }
        }
        else{
            res.send("No Login details found Please create account first");
        }
    }catch(e){
        console.log(e);
    }
};

module.exports = {signup,login};