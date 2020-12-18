const express = require("express");
const router = express.Router();
const {
  getAllBlog,
  getBlogById,
  deleteBlog,
  createBlog,
} = require("../controller/blogController");

const { uploads } = require("../middleware/multerMiddleware");
router.route("/").get(getAllBlog).post(uploads.single("blog"), createBlog);
router.route("/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;
