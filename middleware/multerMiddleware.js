const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "..", "blogImages", "images"),
});
console.log(path.join(__dirname, "..", "blogImages", "images"));
