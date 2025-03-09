require('dotenv').config();
const express = require('express');
const authController = require('./resources/auth/auth-controller');
const userController = require('./resources/user/user-controller');
// const productController = require('./resources/product/product-controller');
const categoryController = require('./resources/product/categorys/category-controller');
const authMiddelware = require('./middlewares/authMiddelware');
const upload = require('./middlewares/imageMiddelware')
const app = express();
app.use(express.json());



app.post('/login', authController.login);

app.post('/create/user', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), upload.single('profilePic'), userController.createUser);
app.put('/update/user/:userId/role', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), userController.updateRole);
app.delete('/delete/user/:userId', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), userController.deleteUser);
app.get('/users',  userController.getUser)
app.get('/user/:userId', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), userController.getUserId)

app.post('/create/category', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), categoryController.createCategory);
app.get('/categorys', categoryController.getCategorys);
app.put('/update/category/:categoryId', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), categoryController.updateCategory);
app.delete('/delete/category/:categoryId', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), categoryController.disableCategory);



const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
});