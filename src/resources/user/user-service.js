const userRepository = require('./user-responsitory');
const bcrypt = require('bcryptjs');

const createUser = async (userData, profilePic) => {
    const hashPassword = await bcrypt.hash(userData.password, 10)

    const profilePicPath = profilePic ? profilePic.path : null;

    return await userRepository.createUser({
        ...userData,
        password: hashPassword,
        profilePic: profilePicPath
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