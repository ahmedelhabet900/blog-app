import { Router } from "express";
import * as blogController from "./blog.controller.js";
const blogRouter = Router();

blogRouter.post("/", blogController.createblog);
blogRouter.get("/", blogController.getallblog);
blogRouter.patch("/:id", blogController.getblogbyid);
blogRouter.delete("/:id", blogController.deleteblogbyid);
blogRouter.put("/:id", blogController.updateblogbyid);

export default blogRouter;
