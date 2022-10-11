const router = require('express').Router()

const productsServices = require('./products.servives')

router.get('/', productsServices.getAllProduct)
router.post('/', productsServices.postProducts)
router.get('/:id', productsServices.getProductById)
router.patch('/:id', productsServices.patchProduct)
router.put('/:id', productsServices.putProduct)
router.delete('/:id', productsServices.deleteProduct)

module.exports = router

