const prisma = require("../../../config/db");

const create = async (categoryData) => {
    return await prisma.category.create({ data: categoryData });
};

const findAll = async () => {
    return await prisma.category.findMany();
};

const update = async (categoryId, categoryData) => {
    return await prisma.category.update({
        where: { id: categoryId },
        data: categoryData,
    });
};

const disable = async (categoryId) => {
    return await prisma.category.delete({
        where: { id: categoryId },
    });
};

module.exports = {
    create,
    update,
    disable,
    findAll,
};