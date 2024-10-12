const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./Routes/userRoutes");

require("dotenv").config();

require("./utils/mongodbConfig")();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/user",userRoutes);

app.listen(3000, () => {
  console.log("Server running!");
});
