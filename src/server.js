require('dotenv').config();
const express = require('express');
const authController = require('./resources/auth/auth-controller');
const userController = require('./resources/user/user-controller');
const authMiddelware = require('./middlewares/authMiddelware');
const upload = require('./middlewares/imageMiddelware')
const app = express();
app.use(express.json());


app.post('/login', authController.login);

app.post('/users', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), upload.single('profilePic'), userController.createUser);
app.put('/user/:userId/role', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), userController.updateRole);
app.delete('/user/:userId', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), userController.deleteUser);


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});