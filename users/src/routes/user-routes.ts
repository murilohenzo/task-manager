import express from 'express';
import UserController from '../controllers/user-controller';
const userController = new UserController();
const router = express.Router();

router
  .get('/user', userController.getAllUsers)
  .get('/user/:username', userController.getUserByUserName)
  .post('/user/signup', userController.createUser)
  .put('/user/:id', userController.updateUser)
  .delete('/user/:id', userController.deleteUser);

export default router;
