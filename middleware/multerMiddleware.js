const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "..", "blogImages", "images"),
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploads = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});
module.exports.uploads = uploads;
