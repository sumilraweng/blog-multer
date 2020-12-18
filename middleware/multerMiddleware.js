const multer = require("multer");
const path = require("path");
const uniqid = require("uniqid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "..", "blogImages", "images"),
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}-${req.headers["blogId"]}-${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});

const uploads = multer({
  storage: storage,
  limits: { fileSize: process.env.IMAGE_SIZE },
});

module.exports.genId = (req, res, next) => {
  req.headers["blogId"] = uniqid();
  next();
};

module.exports.uploads = uploads;
