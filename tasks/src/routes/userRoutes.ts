import express from 'express';
import  UserController from '../controllers/UserController';
const userController = new UserController()
const router = express.Router();

router
    .get('/user', userController.getAllUsers)
    .post('/user', userController.createUser)
    .put('/user/:id', userController.updateUser)
    .delete('/user/:id', userController.deleteUser)

export default router;