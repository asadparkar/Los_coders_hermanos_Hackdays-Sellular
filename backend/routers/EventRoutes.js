const express = require('express')
const router = express.Router();
const EventController = require('../controllers/EventControllers')

router.post('/create',EventController.createEvent);
router.get('/events',EventController.showEvents);
router.post('/apply',EventController.applyEvent)
router.get('/event/:id',EventController.viewSeperateEvent)
router.post('/application/changestatus',EventController.AcceptReject)
router.post('/postedevents',EventController.showMyPostedEvents)
router.post('/appliedevents',EventController.showMyEventApplications)

module.exports = router


