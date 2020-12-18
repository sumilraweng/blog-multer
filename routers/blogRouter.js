const express = require("express");
const router = express.Router();
const {
  getAllBlog,
  getBlogById,
  deleteBlog,
  createBlog,
} = require("../controller/blogController");

router.route("/").get(getAllBlog).post(createBlog);
router.route("/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;
