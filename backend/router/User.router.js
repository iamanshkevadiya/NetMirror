const { Router } = require("express");
const { decode } = require("../middlewares/decodeJwt.js");
const { getAdmins, getUser, getUserById, Login, Signup, deleteUser } = require("../controller/User.controller.js");
const userRouter = Router();

userRouter.get('/admin', decode, getAdmins);
userRouter.get('/', getUser);
userRouter.get('/:userid', getUserById);
userRouter.post('/login', Login);
userRouter.post('/signup', Signup);
userRouter.delete('/delete/:id', deleteUser);

module.exports = userRouter;
