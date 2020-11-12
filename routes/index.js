const express = require('express');
const router = express.Router();



// TODO: what action needs to be performed set using controllers

const homeController = require('../controllers/home_controller')

router.get('/', homeController.home)


module.exports = router;