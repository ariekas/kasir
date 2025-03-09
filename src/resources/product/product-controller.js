const { category } = require('../../config/db')
const productService = require('./product-service')

const createProduct = async (req, res) => {
    const productData = req.body
    try {
        const product = await productService.createProduct(productData)
        res.status(201).json({
            message: 'Product created',
            data: product
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts()
        res.status(201).json({
            message: 'Products found',
           data:{
            products,
        }
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}

const getProductId = async (req, res) => {
    const {productId} = req.params
    try {
        const product = await productService.getProductId(productId)
        res.status(201).json({
            message: `Product with id ${productId} found`,
            data: product
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductId
}