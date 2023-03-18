const express = require('express')
const router = express.Router();
const EventController = require('../controllers/EventControllers')

router.post('/create',EventController.createEvent)

module.exports = router


