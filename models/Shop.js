const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema



const shopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numberOfEmployees: Number,
    currentlyOpen: Boolean
})

const shopCollection = mongoose.model('shops', shopSchema)

// GET ALL
function getShops() {
    return shopCollection.find()
}

// GET ONE
function getShop(id) {
    return shopCollection.findById(id)
}

// CREATE
function addShop(newShop) {
    return shopCollection.create(newShop)
}

// UPDATE
function updateShop(id, shop) {
    return shopCollection.findByIdAndUpdate(id, shop)
}

// DELETE
function deleteShop(id) {
    return shopCollection.findByIdAndDelete(id)
}

module.exports = {
    getShops,
    getShop,
    addShop,
    updateShop,
    deleteShop
}