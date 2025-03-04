const prisma = require('../../config/db');

const createUser = async (userData) => {
return await prisma.user.create({data: userData})
}

const updateRole = async (userId, role) => {
    return await prisma.user.update({
        where: {id: userId},
        data: {role}
    })
} 

const deleteUser = async (userId) => {
    return await prisma.user.delete({
        where: {id: userId}
    })
}

module.exports = {
    createUser,
    updateRole,
    deleteUser
}