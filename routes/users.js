const userRouter = require('express').Router();
const {
  updateUser,
  getUserMe,
} = require('../controllers/users');

const {
  validationUpdateUser,
} = require('../middlewares/validation');

userRouter.patch('/me', validationUpdateUser, updateUser);

userRouter.get('/me', getUserMe);

module.exports = userRouter;
