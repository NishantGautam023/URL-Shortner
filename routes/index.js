const express = require('express');
const router = express.Router();



// TODO: what action needs to be performed set using controllers

const homeController = require('../controllers/home_controller')

router.get('/', homeController.home)

// home.ejs POST method url  line number 15
router.post('/shortUrls',homeController.shortUrls)

router.get('/:shortUrl', homeController.shortUrl)
// Get me anything that have information after the first / which will be saved in a
// paramter called shortUrl 

module.exports = router;