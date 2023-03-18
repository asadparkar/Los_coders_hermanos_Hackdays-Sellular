const Event = require('../models/EventModel');

const createEvent = (async(req,res)=>{
    const {event_name,event_location,event_mode,event_theme,description,event_prize,event_timeline,event_status,organizer} = req.body
    try{
        const event = new Event({
            event_name:event_name,
            event_location:event_location,
            event_mode:event_mode,
            event_theme:event_theme,
            description:description,
            event_prize:event_prize,
            event_timeline:event_timeline,
            event_status:event_status,
            organizer:organizer
        })
        await event.save();
        res.status(200).json({message:'Event has been created successfully'})

    } catch(err){
        console.log(err);
        res.status(500).json({error:'An unkown error occurred'})
    }
});

const showEvents = (async(req,res)=>{
    try{
        const events = await Event.find({});
        res.status(200).json({events:events})
    } catch (err){
        console.log(err);
        res.status(500).json({error:"An internal Error Occurred"})
    }
})
module.exports = {createEvent,showEvents}