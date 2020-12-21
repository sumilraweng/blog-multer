const multer = require("multer");
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");

module.exports.multerError = (req, res) => {};

const filterFile = (req, file, cb) => {
  const validateExtension = [
    "image/gif",
    "image/png",
    "image/jpeg",
    "image/jpg",
  ];
  if (validateExtension.includes(file.mimetype)) {
    return cb(null, true);
  } else {
    return cb(new Error("Invalid file type"), false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const mainDir = path.join(__dirname, "..", "blogImages");
    const mainDirExists = fs.existsSync(mainDir);
    const childDir = path.join(__dirname, "..", "blogImages", "images");
    if (!mainDirExists) {
      fs.mkdirSync(mainDir);
      fs.mkdirSync(childDir);
    }
    return cb(null, childDir);
  },
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
  fileFilter: filterFile,
  limits: { fileSize: eval(process.env.IMAGE_SIZE) },
});

module.exports.genId = (req, res, next) => {
  req.headers["blogId"] = uniqid();
  next();
};

module.exports.uploads = uploads;
