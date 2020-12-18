const express = require("express");
const dotenv = require("dotenv");
const { MulterError } = require("multer");
dotenv.config({ path: "./config.env" });

const blogRouter = require("./routers/blogRouter");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/blogs", express.static("blogImages/images"));

app.use((err, req, res, next) => {
  if (err instanceof MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
});
app.use("/blogs", blogRouter);
app.listen(3000, console.log("listning at the port"));

// --> define Schema blog
// --> crud operation with mongo
//--> define router
