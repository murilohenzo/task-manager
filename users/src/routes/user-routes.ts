import express from 'express';
import UserController from '../controllers/user-controller';
const userController = new UserController();
const router = express.Router();

router
  .get('/user', userController.getAllUsers)
  .post('/user', userController.createUser);

export default router;
