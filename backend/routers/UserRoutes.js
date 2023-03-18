const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserControllers')
// const auth = require('../middlewares/Auth')


router.post('/signup', UserControllers.Signup);
router.post('/login', UserControllers.Login);
router.post('/update',UserControllers.UpdateProfile);
router.get('/profile',UserControllers.ViewProfile);
router.get('/myprofile/:id',UserControllers.ViewMyProfile)
router.get('/users',UserControllers.exploreUsers)




module.exports = router
