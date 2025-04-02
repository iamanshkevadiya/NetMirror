const { Router } = require("express");
const { createuser, Loginuser } = require("../controller/User.controller");
const Tokendeocde = require("../middlewares/Jwt_decode");
const UserRouter = Router();

UserRouter.post("/signup", createuser);
UserRouter.post("/login",Tokendeocde, Loginuser); 

module.exports = UserRouter;
