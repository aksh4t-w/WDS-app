const express = require("express");
const router = express.Router();
const Book = require("../models/books");

router.get("/", async (req, res) => {
  const books = await Book.find().sort({ createdAt: "desc" }).limit(5).exec();
  res.render("index", { books: books });
});

module.exports = router;
