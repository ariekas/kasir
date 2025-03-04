const userService = require('./user-service');

const createUser = async (req, res) => {
    const {username, password, role} = req.body
    const profilePic = req.file;
    try {
        const user = await userService.createUser({username, password, role}, profilePic)
        res.status(201).json({message: 'User created', data: user})
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}


const updateRole = async (req, res) => {
    const {userId} = req.params
    const {role} = req.body
    try {
        const user = await userService.updateRole(userId, role)
        res.status(201).json({
            message: "User role updated",
            data: user
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
} 

const deleteUser = async (req, res) => {
    const {userId} = req.params
    try {
        const user = await userService.deleteUser(parseInt(userId))
        res.status(201).json({
            message: "User deleted",
            data: user
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}

module.exports = {
    createUser,
    updateRole,
    deleteUser
}