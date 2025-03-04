const userRepository = require('./user-responsitory');
const bcrypt = require('bcryptjs');

const createUser = async (userData) => {
    const hashPassword = await bcrypt.hash(userData.password, 10)

    const profilePicturePath = profilePicture ? profilePicture.path : null;

    return await userRepository.createUser({
        ...userData,
        password: hashPassword,
        profilePicture: profilePicturePath
    })
}

const updateRole = async (userId, role) => {
    return await userRepository.updateRole(userId, role)
}

const deleteUser = async (userId) => {
    return await userRepository.deleteUser(userId)
}



module.exports = {
    createUser,
    updateRole,
    deleteUser
}