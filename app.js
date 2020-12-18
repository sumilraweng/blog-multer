const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const blogRouter = require("./routers/blogRouter");

const app = express();
app.use("/blogs", blogRouter);

app.listen(3000, console.log("listning at the port"));

// --> define Schema blog
// --> crud operation with mongo
//--> define router