const mongoose = require('mongoose');

const HackApplicationSchema = mongoose.Schema({
    event_id:{
        type:mongoose.Types.ObjectId,
        ref:'Events',
        required:true
    },
    applicant_id:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    join_type:{
        type:String,
        required:true
    },
    why_join:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('HackApplication',HackApplicationSchema)