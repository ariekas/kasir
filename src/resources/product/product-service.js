const productRepository = require('./product-responsitory')

const createProduct = async (productData) => {
    return await productRepository.create(productData)
}

const getproducts = async () => {
    return await productRepository.findAll()
}

const getProductId = async (productId) => {
    return await productRepository.findById(productId)
}

const updateProduct = async (productId, productData) => {
    return await productRepository.update(productId, productData)
}

const deleteProduct = async (productId) => {
    return await productRepository.disable(productId)
}

const updateStock = async (productId, quantity, type) => {
    return await productRepository.updateStock(productId, quantity, type)
}

module.exports = {
    createProduct,
    getproducts,
    getProductId,
    updateProduct,
    deleteProduct,
    updateStock
    
}