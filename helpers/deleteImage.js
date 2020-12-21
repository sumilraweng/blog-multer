const fs = require("fs");
const path = require("path");
//deleting the image file when it something error occur in savng the file in mongo
module.exports.deleteFile = (req, res, pathToImg) => {
  const imagePath = path.join(
    __dirname,
    "..",
    "blogImages",
    "images",
    pathToImg
  );
  fs.unlink(imagePath, (err) => {
    if (err) {
      return res.status(500).json({
        status: "unsuccessfull",
        message: "Internal error",
      });
    }
  });
  return 200;
};
