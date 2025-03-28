const router=require('express').Router()
const addProduct=require('../api/v1/products/addProduct')
const alterQuantity=require('../api/v1/products/alterQuantity')
const getCurrentStock=require('../api/v1/products/getCurrentStock')


router.post('/addproduct',addProduct)
router.post('/addQuantity/:prodId',alterQuantity)
router.get('/getCurrentStock/:prodId',getCurrentStock)
module.exports=router