const express = require('express')

const app = express()

const PORT = 3000

const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')

app.use('/fruits', fruitRoutes)
app.use('/meats', meatRoutes)
// example of an "index" route


// example of a "show" route


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})
