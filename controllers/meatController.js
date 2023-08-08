const meats = require('../models/meats')

function index(req, res) {
    res.send(meats)
}


function show(req, res) {
    res.send(meats[req.params.indexOfMeat])
}

module.exports = {
    index,
    show
}