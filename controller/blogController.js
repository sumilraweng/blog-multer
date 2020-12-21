const { deleteFile } = require("../helpers/deleteImage");
const { createBlog, findBlog, deleteBlog } = require("../models/mongoCrud");

module.exports.getAllBlog = async (req, res) => {
  try {
    const allBlog = await findBlog();
    res.status(200).json(allBlog);
  } catch (err) {
    res.status(400).json({
      status: "unsuccessfull",
      message: "Request body is invalid",
    });
  }
};

module.exports.getBlogById = async (req, res) => {
  try {
    const allBlog = await findBlog({ blogId: req.params.id });
    res.status(200).json(allBlog);
  } catch (err) {
    res.status(400).json({
      status: "unsuccessfull",
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
    const response = deleteFile(req, res, req.file.filename);
    if (response == 200) {
      return res.status(400).json({
        status: "unsuccessfull",
        message: "Request body is invalid",
      });
    }
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const blog = await deleteBlog({ blogId: req.params.id });
    const url = blog.blogImage.split("/");
    if (deleteFile(req, res, url[url.length - 1]) == 200) {
      return res.status(200).json(blog);
    }
  } catch (err) {
    res.status(400).json({
      status: "unsuccessfull",
    });
  }
};
