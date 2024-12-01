const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./Routes/userRoutes");
const adminRoutes = require("./Routes/adminRoutes");
require("dotenv").config();

require("./utils/mongodbConfig")();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server running!");
});
