import express from "express";
import bootstrap from "./src/app.controller.js";
import db from "./src/DB/connect.js";

const app = express();
const server = async () => {
  try {
    await bootstrap(express, app);
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  } catch (err) {
    console.log(err.message);
  }
};

server();
