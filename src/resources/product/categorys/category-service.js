const categoryResponsitory = require("./category-responsitory");

const createCategory = async (categoryData) => {
    return await categoryResponsitory.create(categoryData);
};

const updateCategory = async (categoryId, categoryData) => {
    return await categoryResponsitory.update(categoryId, categoryData);
};

const disableCategory = async (categoryId) => {
    return await categoryResponsitory.disable(categoryId);
};

const getCategorys = async () => {
    return await categoryResponsitory.findAll();
};

module.exports = {
    createCategory,
    updateCategory,
    disableCategory,
    getCategorys
};