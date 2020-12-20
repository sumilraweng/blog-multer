const mongoose = require("mongoose");
module.exports.BlogSchema = new mongoose.Schema({
  blogId: {
    type: String,
    unique: true,
    required: true,
  },
  blogImage: {
    type: String,
    required: true,
  },
  blogTitle: {
    type: String,
    required: true,
  },
  blogContent: {
    type: String,
    required: [true, "required blog content "],
  },
  blogReleatedLinks: {
    type: [
      {
        _id: false,
        linkId: {
          type: String,
          required: true,
        },
        title: { type: String, required: true },
      },
    ],
    required: true,
  },
});
