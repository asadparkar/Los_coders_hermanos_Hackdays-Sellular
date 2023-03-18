const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
    },
    skills:[{
        type:String,
    }],
    github:{
        type:String,
    },
    linkedIn:{
        type:String,
    },
    resume:{
        type:String,
    },
    phone:{
        type:String,
    },
    college:{
        type:String,
    },
    profile_picture:{
        type:String
    },
    threads:[{
        type:mongoose.Types.ObjectId,
        ref:'Thread',
        required:true
    }],
    application_ids:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Application",
            required:true
        }
    ],
    posted_events:[{
        type:mongoose.Types.ObjectId,
        ref:"Events",
        required:true
    }],
    applied_events:[{
        type:mongoose.Types.ObjectId,
        ref:'HackApplication',
        required:true
    }]
    // rejected:[{
    //     type:mongoose.Types.ObjectId
    // }],
    // accepted:[{
    //     type:mongoose.Types.ObjectId
    // }]
})

module.exports = mongoose.model('User',UserSchema)