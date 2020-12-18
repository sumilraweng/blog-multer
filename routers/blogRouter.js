const express = require("express");
const router = express.Router();
const {
  getAllBlog,
  getBlogById,
  deleteBlog,
  blogCreate,
} = require("../controller/blogController");

const { uploads, genId } = require("../middleware/multerMiddleware");
router
  .route("/")
  .get(getAllBlog)
  .post(genId, uploads.single("blogImage"), blogCreate);
router.route("/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;
