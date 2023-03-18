const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    event_name:{
        type:String,
        required:true
    },
    event_img:{
        type:String,
        required:true
    },
    event_location:{
        type:String,
        required:true
    },
    event_mode:{
        type:String,
        required:true
    },
    event_theme:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    event_prize:{
        type:String,
        required:true
    },
    event_timeline:[{
        type:String,
        required:true
    }],
    event_status:{
        type:String,
        required:true
    },
    organizer:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    event_applications:[{
        type:mongoose.Types.ObjectId,
        ref:'HackApplication',
        required:true
    }],

})

module.exports = mongoose.model('Events',EventSchema)