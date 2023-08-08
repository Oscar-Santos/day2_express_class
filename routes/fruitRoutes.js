const express = require('express')



const router = express.Router()

const fruitController = require('../controllers/fruitController')
//index route

// move to the controllers

router.get('/', fruitController.index)

// show route
router.get('/:indexOfFruit', fruitController.show)

module.exports = router