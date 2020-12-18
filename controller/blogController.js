const { createBlog, findBlog, deleteBlog } = require("../models/mongoCrud");

module.exports.getAllBlog = (req, res) => {};

module.exports.getBlogById = (req, res) => {};

module.exports.blogCreate = (req, res) => {
  const imageUrl = `${req.protocol}://${req.hostname}:${process.env.PORT}${req.originalUrl}${req.file.filename}`;

  const blogObj = {
    blogId: req.headers["blogId"],
    blogImage: imageUrl,
    blogTitle: req.body.blogTitle,
    blogContent: req.body.blogContent,
    blogReleatedLinks: JSON.parse(req.body.blogReleatedLinks),
  };
  // console.log(blogObj);
  createBlog(blogObj);
  res.json({
    status: "success",
  });
};

module.exports.deleteBlog = (req, res) => {};
