const express = require("express");
const dotenv = require("dotenv");

const blogRouter = require("./routers/blogRouter");
dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/blogs", express.static("blogImages/images"));

app.use("/blogs", blogRouter);
app.listen(PORT, console.log("listning at the port"));
