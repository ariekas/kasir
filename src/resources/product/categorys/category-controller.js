const categoryService = require('./category-service');

const createCategory = async (req, res) => {
    const categoryData = req.body;
    const result = await categoryService.createCategory(categoryData);
    res.status(200).json(result);
};

const getCategorys = async (req, res) => {
    const result = await categoryService.getCategorys();
    res.status(200).json(result);
};

module.exports = {
    createCategory,
    getCategorys
};