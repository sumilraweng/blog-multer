const { createBlog, findBlog, deleteBlog } = require("../models/mongoCrud");

module.exports.getAllBlog = (req, res) => {
  console.log(req.file.filename);
  res.json({
    status: "success",
  });
};

module.exports.getBlogById = (req, res) => {};

module.exports.blogCreate = (req, res) => {};

module.exports.deleteBlog = (req, res) => {};
