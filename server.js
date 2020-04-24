const express = require('express')
const methodOverride = require('method-override')
const shopRouter = require('./controllers/shop.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(methodOverride('_method'))


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs')

app.use('/shop', shopRouter)


app.listen(3000, () => {
    console.log("Sever started on port 3000")
})