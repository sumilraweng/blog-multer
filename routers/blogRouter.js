const multer = require("multer");
const express = require("express");
const router = express.Router();
const {
  getAllBlog,
  getBlogById,
  deleteBlog,
  blogCreate,
} = require("../controller/blogController");

const {
  uploads,
  genId,
  multerError,
} = require("../middleware/multerMiddleware");
const uploadFile = uploads.single("blogImage");
const {
  filterReqBody,
  checkBlogExits,
  checkingImage,
} = require("../middleware/blogMiddleware");
router
  .route("/")
  .get(getAllBlog)
  .post(
    genId,
    (req, res, next) => {
      uploadFile(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({
            status: "unseescful",
            message: "Invalid body request",
          });
        } else if (err) {
          return res.status(400).json({
            status: "unseescful",
            message: "Invalid body request",
          });
        }
        next();
      });
    },
    checkingImage,
    filterReqBody,
    checkBlogExits,
    blogCreate
  );
router.route("/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;
