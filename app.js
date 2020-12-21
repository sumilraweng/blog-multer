const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const blogRouter = require("./routers/blogRouter");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/blogs", express.static("blogImages/images"));

app.use("/blogs", blogRouter);
app.listen(PORT, console.log("listning at the port"));
