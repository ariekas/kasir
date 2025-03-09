const categoryResponsitory = require('./category-responsitory');

const createCategory = async (categoryData) => {
    return await categoryResponsitory.create(categoryData);
};

const getCategorys = async () => {
    return await categoryResponsitory.findAll();
};

module.exports = {
    createCategory,
    getCategorys
}