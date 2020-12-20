//deleting the image file when it something error occur in savng the file in mongo
module.exports.deleteFile = (req, res) => {
  if (!req.file) {
    return 400;
  }
  const imagePath = path.join(
    __dirname,
    "..",
    "blogImages",
    "images",
    req.file.filename
  );
  console.log(imagePath);
  fs.unlink(imagePath, (err) => {
    if (err) {
      res.status(500).json({
        status: "unsuccessfull",
        message: "Internal error",
      });
    }
  });
  return 400;
};
