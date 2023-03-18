const express = require('express')
const router = express.Router();
const EventController = require('../controllers/EventControllers')

router.post('/create',EventController.createEvent);
router.get('/events',EventController.showEvents);
router.post('/apply',EventController.applyEvent)
router.get('/event/:id',EventController.viewSeperateEvent)

module.exports = router


