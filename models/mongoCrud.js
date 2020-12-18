const { connect } = require("./mongoConnection");
const { BlogSchema } = require("./blogSchema");
const Blog = connect.model("blog", BlogSchema);

const createBlog = async (obj) => {
  try {
    const blog = new Blog(obj);
    const data = await blog.save();
  } catch (err) {
    console.log("err-->", err);
  }
  //   console.log("blog");
};
const findBlog = (obj) => {};
const deleteBlog = (obj) => {};

module.exports = {
  createBlog: createBlog,
  findBlog: findBlog,
  deleteBlog: deleteBlog,
};
