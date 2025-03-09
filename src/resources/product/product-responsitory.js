const prisma = require("../../config/db");

const create = async (productData) => {
  return await prisma.product.create({ data: productData });
};

const findAll = async () => {
  return await prisma.product.findMany(
  );
};

const findById = async (productId) => {
  return await prisma.product.findUnique({
    where: { id: productId },
  });
};

module.exports = {
  create,
  findAll,
  findById,
};
