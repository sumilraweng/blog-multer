const { connect } = require("./mongoConnection");
const { BlogSchema } = require("./blogSchema");
const Blog = connect.model("blogtemp", BlogSchema);

const createBlog = async (obj) => {
  const blog = new Blog(obj);
  const data = await blog.save();
  console.log("blog");
};
const findBlog = async (obj) => {
  return await Blog.find(obj).select(
    "blogId blogImage blogTitle blogContent blogReleatedLinks -_id"
  );
};

const blogexists = async (obj) => {
  return await Blog.exists(obj);
};
const deleteBlog = (obj) => {};

module.exports = {
  createBlog: createBlog,
  findBlog: findBlog,
  deleteBlog: deleteBlog,
  isBlogExists: blogexists,
};
