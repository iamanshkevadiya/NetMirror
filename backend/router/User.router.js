const { Router } = require("express");
const { decode } = require("../middlewares/decodejwt");
const { getAdmins, getUser, getUserById, Login, Signup, deleteUser } = require("../controller/user.controller");
const userRouter = Router();

userRouter.get('/admin', decode, getAdmins);
userRouter.get('/', getUser);
userRouter.get('/:id', getUserById);
userRouter.post('/login', Login);
userRouter.post('/signup', Signup);
userRouter.delete('/delete/:id', deleteUser);

module.exports = userRouter;
