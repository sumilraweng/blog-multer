const {deleteFile}=require("../helpers/deleteImage")
const { createBlog, findBlog, deleteBlog } = require("../models/mongoCrud");
const fs = require("fs");
const path = require("path");



module.exports.getAllBlog = async (req, res) => {
  try {
    const allBlog = await findBlog(); 
    res.status(200).json({ blogs: allBlog });
  } catch (err) {
    res.status(400).json({
      status: "unsuccessfull",
      message: "Request body is invalid",
    });
  }
};

module.exports.getBlogById = (req, res) => {
  try {
    const allBlog = await findBlog(req.blogId); 
    res.status(200).json({ blogs: allBlog });
  } catch (err) {
    res.status(400).json({
      status: "unsuccessfull",
      message: "Request body is invalid",
    });
  }
};

module.exports.blogCreate = async (req, res) => {
  try {
    const imageUrl = `${req.protocol}://${req.hostname}:${process.env.PORT}${req.originalUrl}${req.file.filename}`;
    const blogObj = {
      blogId: req.headers["blogId"],
      blogImage: imageUrl,
      blogTitle: req.body.blogTitle.trim(),
      blogContent: req.body.blogContent.trim(),
      blogReleatedLinks: req.body.blogReleatedLinks,
    };

    await createBlog(blogObj);

    res.status(200).json({
      status: "blog Created ",
    });
  } catch (err) {
    const response = deleteFile(req, res);
    if (response == 400) {
      res.status(400).json({
        status: "unsuccessfull",
        message: "Request body is invalid",
      });
    }
  }
};

module.exports.deleteBlog = (req, res) => {};
