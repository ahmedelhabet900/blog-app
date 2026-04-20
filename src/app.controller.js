import userrouts from "./user.controller.js";
import blogRouter from "./module/blog/blog.router.js";
const bootsrap = async (express, app) => {
  app.use(express.json());

  app.use("/user", userrouts);

  app.use("/", (req, res) => {
    res.json(404);
    res.send({
      message: " routes not found",
    });
  });
};

export default bootsrap;
