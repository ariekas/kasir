const productService = require('./product-service')

const createProduct = async (req, res) => {
    const productData = req.body
    const product = await productService.createProduct(productData)
    res.status(201).json(product)
}

const getProducts = async (req, res) => {
    const products = await productService.getproducts()
    res.status(200).json(products)
}

const getProductId = async (req, res) => {
    const {productId} = req.params
    const product = await productService.getProductId(productId)
    res.status(200).json(product)
}

const updateProduct = async (req, res) => {
    const {productId} = req.params
    const productData = req.body
    const product = await productService.updateProduct(productId, productData)
    res.status(200).json(product)
}

const updateStock = async (req, res) => {
    const { productId } = req.params;
    const { quantity, type } = req.body;

    try {
        const product = await productService.updateStock(productId, quantity, type);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Stock updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


const deleteProduct = async (req, res) => {
    const {productId} = req.params
    const product = await productService.deleteProduct(productId)
    res.status(200).json(product)
}

module.exports = {
    createProduct,
    getProducts,
    getProductId,
    updateProduct,
    deleteProduct,
    updateStock
}
