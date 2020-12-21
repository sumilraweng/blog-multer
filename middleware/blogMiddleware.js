const { deleteFile } = require("../helpers/deleteImage");
const { isBlogExists } = require("../models/mongoCrud");

module.exports.checkingImage = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({
      status: "unsuccessfull",
      message: "Request body is invalid",
    });
  }
  next();
};

module.exports.filterReqBody = (req, res, next) => {
  if (req.body.blogReleatedLinks) {
    req.body.blogReleatedLinks = JSON.parse(req.body.blogReleatedLinks);
    const blogReleatedLinks = req.body.blogReleatedLinks;
    for (i in blogReleatedLinks) {
      if (blogReleatedLinks[i].linkId && blogReleatedLinks[i].title) {
        blogReleatedLinks[i].linkId = blogReleatedLinks[i].linkId.trim();
        blogReleatedLinks[i].title = blogReleatedLinks[i].title.trim();
      } else {
        if (deleteFile(req, res, req.file.filename) == 200) {
          return res.status(400).json({
            status: "unsuccessfull",
            message: "please enter the validate data ",
          });
        }
      }
    }
  } else {
    if (deleteFile(req, res, req.file.filename) == 200) {
      return res.status(400).json({
        status: "unsuccessfull",
        message: "please enter the validate data ",
      });
    }
  }
  next();
};

module.exports.checkBlogExits = async (req, res, next) => {
  try {
    const links = req.body.blogReleatedLinks;
    for (i in links) {
      if (
        !(await isBlogExists({
          blogId: links[i].linkId,
          blogTitle: links[i].title,
        }))
      ) {
        return res.status(400).json({
          status: "unsuccessfull",
          message: "please enter the validate data in realted links",
        });
      }
    }
    next();
  } catch (err) {
    res.status(500).json({
      status: "unsuccessfull",
      message: "Internal Error",
    });
  }
};
