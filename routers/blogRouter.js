const express = require("express");
const router = express.Router();
const {
  getAllBlog,
  getBlogById,
  deleteBlog,
  blogCreate,
} = require("../controller/blogController");

const { uploads, genId } = require("../middleware/multerMiddleware");
const {
  filterReqBody,
  checkBlogExits,
} = require("../middleware/blogMiddleware");
router
  .route("/")
  .get(getAllBlog)
  .post(
    genId,
    uploads.single("blogImage"),
    filterReqBody,
    checkBlogExits,
    blogCreate
  );
router.route("/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;
