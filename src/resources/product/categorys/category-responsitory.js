const prisma = require("../../../config/db");

const findAll = async () => {
    return await prisma.category.findMany({});
};

const create = async (categoryData) => {
    return await prisma.category.create({ data: categoryData });
};

module.exports = {
    findAll,
    create
};