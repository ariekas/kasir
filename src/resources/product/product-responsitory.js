const prisma = require('../../config/db')

const findAll = async () => {
  return await prisma.product.findMany()
}

const findById = async (productId) => {
  return await prisma.product.findUnique({
    where:{id: productId}
  })
}

const create = async (productData) => {
  return await prisma.product.create({data: productData})
}

const update = async ( productId, productData) => {
  return await prisma.product.update({
    where:{id: productId},
    data: productData
  })
}

const disable = async (productId) => {
  return await prisma.product.delete({
    where: { id: productId },
  });
};

const updateStock = async (productId, stock) => {
  return await prisma.product.update({
      where: { id: productId },
      data: { stock },
  });
};


module.exports = {
  create,
  update,
  disable,
  findAll,
  findById,
  updateStock
}