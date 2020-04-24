const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/coffee-shop')
    .then(() => {
        console.log('Connected to database successfully')
    })
    .catch(err => {
        console.log('Failed to connect to database')
        console.log(err)
    })

// async function dbConnect() {
//     try {
//         await mongoose.connect('mongodb://localhost/coffee-shop')
//         console.log('Connected to database successfully')
//     } catch (err) {
//         console.log('Failed to connect to database')
//         console.log(err)
//     }
// }

// dbConnect()

module.exports = mongoose
