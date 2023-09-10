import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URL;
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT))
  .then(() =>
    console.log("Connected to database and listening to localhost 5000")
  )
  .catch((err) => console.log(err));
