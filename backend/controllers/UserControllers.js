const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

// FOR BCRYPT (LATER TO PUT IN ENVIRONTMENT VARIABLES)
const saltRounds = 10;

const Signup = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        if (!name || !email || !password){
            res.status(400).json({error:'Send all required fields in body!'});
            return;
        }
        const existingUser = await  User.findOne({email});
        if (existingUser){
            res.status(403).json({error:'User Already Exists! Use Login'});
            return
        } else{
            const hashedPassword = await bcrypt.hash(password,saltRounds)
            const user = new User({
                name:name,
                email:email,
                password:hashedPassword
            })

            user.save();
            res.status(200).json({message:"User Created Sucessfully"})
        }

    } catch(error){
        console.log(error);
        res.status(500).json({error:"An Error Occurred"})

    }
}

module.exports = {Signup}