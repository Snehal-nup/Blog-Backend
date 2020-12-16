const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "blogs.json");
const blogs = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const AppError = require("../helpers/appError");
const sendErrorMessage = require("../helpers/sendErrorMessage");
const sendResponse = require("../helpers/sendResponse");

const getAllBlogs = (req, res, next) => {
  let result = blogs.filter((blog) => {
    return Object.keys(req.query).every((key) => {
      return blog[key] === req.query[key];
    });
  });
  res.status(200).json({
    message: "successful",
    data: result,
  });
  next();
};

const getBlogById = (req, res, next) => {
  let result = blogs.find((blog) => {
    return req.params.id == blog.id;
  });
  if (result) {
    sendResponse(200, "Successful", result, req, res);
  } else {
    sendErrorMessage(
      new AppError(400, "unsuccessful", "blog not found"),
      req,
      res
    );
  }
  next();
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogById = getBlogById;
