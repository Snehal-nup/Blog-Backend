const express = require("express");
const { getAllBlogs, getBlogById } = require("../controllers/blogControllers");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blogs/:id").get(getBlogById);

module.exports = router;
