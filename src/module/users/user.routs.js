import { Router } from "express";
import * as userController from "./user.controller.js";
const userRouter = Router();

userRouter.post("/", userController.createuser);
userRouter.get("/", userController.getalluser);
userRouter.patch("/:id", userController.getuserbyid);
userRouter.delete("/:id", userController.deleteuserbyid);
userRouter.put("/:id", userController.updateuserbyid);

export default userRouter;
