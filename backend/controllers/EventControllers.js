const { default: mongoose, mongo } = require('mongoose');
const Event = require('../models/EventModel');
const HackApplication = require('../models/HackApplications');
const User = require('../models/UserModel');

const createEvent = (async(req,res)=>{
    const {event_name,event_location,event_mode,event_theme,description,event_prize,event_timeline,event_status,organizer} = req.body;
    const isOrganizer = await User.findById({_id:organizer});
    if (!isOrganizer){
        res.status(200).json({errpr:"User not found with this id"})
        return;
    }
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
        const session = await mongoose.startSession();
        session.startTransaction();
        await event.save({session})
        isOrganizer.posted_events.push(event);
        await isOrganizer.save({session})
        await session.commitTransaction();
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
const applyEvent = (async(req,res)=>{
    try{
        const {event_id,applicant_id,join_type,why_join,application_status} = req.body;
        const eventExists = await Event.findById({_id:event_id});
        if (!eventExists){
            res.status(404).json({error:"No Hackathon found with this id"})
            return
        }
        const isUserExists = await User.findById({_id:applicant_id});
        if (!isUserExists){
            res.status(404).json({error:'No user found with this id'});
            return
        }
        const application = new HackApplication({
            event_id:event_id,
            applicant_id:applicant_id,
            join_type:join_type,
            why_join:why_join,
            application_status:application_status
        })
        const session = await mongoose.startSession();
        await session.startTransaction();;
        await application.save({session});
        eventExists.event_applications.push(application);
        await eventExists.save({session});
        isUserExists.applied_events.push(application);
        await isUserExists.save({session});
        await session.commitTransaction();
        res.status(200).json({message:"Application to this hackathon successfull"})

    } catch{(err)=>{
        console.log(err);
        res.status(500).json({error:"An internal Error Occurred"})
    }}
})
const viewSeperateEvent = (async(req,res)=>{
    try{
        const {id} = req.params;
        const event = await Event.findById({_id:id}).populate('event_applications');
        if (!event){
            res.status(404).json({error:"Event/Hackathon not found :("})
            return
        }
        res.status(200).json({event:event})
    } catch ( error){
        console.log(error);
        res.status(500).json({error:'An unknown Error Occurred'})
    }
})
const AcceptReject = (async(req,res)=>{
    try{
        const {id,payload} = req.body;
        const isExistingHackApplication = await HackApplication.updateOne({_id:id},{application_status:payload})
        if (!isExistingHackApplication){
            res.status(404).json({error:"Application to this Hackathon not found"});
            return;
        }
        res.status(200).json({message:"Application has been accepted/rejected!"})
    } catch (error){
        console.log(error)
        res.status(200).json({error:"An unkown Error Occurred"})
    }
})
const showMyPostedEvents = (async(req,res)=>{
    try{
        const {id} = req.body
        const PostedEvents = await User.findById({_id:id}).populate('posted_events').select(['posted_events']);
        if (!PostedEvents){
            res.status(404).json({error:"Not found"});
            return
        }
        res.status(200).json({postedEvents:PostedEvents})
    } catch(error){
        console.log(error);
        res.status(500).json({error:"An Error Occurred"})
    }
})
const showMyEventApplications = (async(req,res)=>{
    try{
        const {id} = req.body
        const myEventApplications = await User.findById({_id:id}).populate('applied_events').select(['applied_events']);
        if (!myEventApplications){
            res.status(404).json({error:"Not found"});
            return
        }
        res.status(200).json({myEventApplications:myEventApplications})
    } catch (error){
        console.log(error);
        res.status(500).json({error:"An Error Occurred"}) 
    }
})
module.exports = {createEvent,showEvents,applyEvent,viewSeperateEvent,AcceptReject,showMyPostedEvents,showMyEventApplications}