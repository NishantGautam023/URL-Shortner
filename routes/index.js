const express = require('express');
const router = express.Router();



// TODO: what action needs to be performed set using controllers

const homeController = require('../controllers/home_controller')

router.get('/', homeController.home)

// home.ejs POST method url  line number 15
router.post('/shortUrls',homeController.shortUrls)

module.exports = router;