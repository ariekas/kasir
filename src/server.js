require('dotenv').config();
const express = require('express');
const authController = require('./resources/auth/auth-controller');
const userController = require('./resources/user/user-controller');
const productController = require('./resources/product/product-controller');
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


app.post('/create/product', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), productController.createProduct);
app.get('/products', productController.getProducts);
app.get('/product/:productId', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), productController.getProductId);
app.put('/update/:productId', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), productController.updateProduct);
app.delete('/delete/:productId', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), productController.deleteProduct);
app.post('/update/:productId/stock', authMiddelware.verifyToken, authMiddelware.verifyRole('admin'), productController.updateStock);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
});