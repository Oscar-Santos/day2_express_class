const fruits = require('../models/fruits')

// callback function from the index
function index(req, res) {
    
        res.send(fruits)

}

function show(req, res) {
    res.send(fruits[req.params.indexOfFruit] || '<h1>Not found :(</h1>')
}

module.exports = {
    index,
    show
}