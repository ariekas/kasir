const productResponsitory = require('./product-responsitory');

const createProduct = async (productData) => {
    return await productResponsitory.create(productData);
};

const getProducts = async () => {
    return await productResponsitory.findAll({
        include: {
            category: true,
        },
    });
};

const getProductId = async (productId) => {
    return await productResponsitory.findById(productId);
};

module.exports = {
    createProduct,
    getProducts,
    getProductId,
};