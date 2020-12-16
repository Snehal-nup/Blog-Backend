const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
dotenv.config({ path: "./config.env" });
const router = require("./routes/blogRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use("/blogstask", blogRoutes);

app.listen(process.env.PORT, console.log("app started at port 3000"));
