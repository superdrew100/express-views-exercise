const express = require('express')
const ShopModel = require('../models/Shop.js')

const shopRouter = express.Router()

shopRouter.get('/', (req, res) => {

    ShopModel.getShops()
        .then((allShops) => {
            const title = `Result Count ${allShops.length}`
            res.render('shop/allShops', {allShops, title})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

shopRouter.get('/new', (req, res) => {
    res.render('shop/createShop')
})

shopRouter.get('/:id/edit', (req, res) => {
    ShopModel.getShop(req.params.id)
        .then((singleShop) => {
            res.render('shop/editShop',  {singleShop})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

shopRouter.get('/delete', (req, res)=> {
    res.render('shop/deleteShop')
})

shopRouter.get('/:id', (req, res) => {

    ShopModel.getShop(req.params.id)
        .then((singleShop) => {

            res.render('shop/singleShop',  {singleShop})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })

})


shopRouter.post('/', (req, res) => {

    ShopModel.addShop(req.body)
        .then((createdShop) => {
            res.redirect(`/shop/${createdShop._id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })

})

shopRouter.delete('/:id', (req, res) => {

    ShopModel.deleteShop(req.params.id)
        .then(() => {
            res.redirect('/shop')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


shopRouter.put('/:id', (req, res) => {

    ShopModel.updateShop(req.params.id, req.body)
        .then(() => {
            res.redirect(`/shop/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


module.exports = shopRouter