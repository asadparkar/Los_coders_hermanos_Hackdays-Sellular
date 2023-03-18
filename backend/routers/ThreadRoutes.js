const express = require('express');
const router = express.Router();
const ThreadControllers = require('../controllers/ThreadControllers')

//AUTHENTICATION MIDDLEWARE
// const auth = require('../middlewares/Auth')

router.post('/create',ThreadControllers.createThread);
router.get('/threads',ThreadControllers.viewThreads);
router.get('/thread/:id',ThreadControllers.viewThread);
router.post('/changestatus',ThreadControllers.AcceptReject);
router.post('/close',ThreadControllers.closeThread);
router.get('/viewMyThreads/:id',ThreadControllers.viewMyThreads)

module.exports = router;