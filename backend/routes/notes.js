const express = require("express");
const noteModel = require("../model/notes-model");
const {
  createNote,
  getAllNotes,
  getNote,
  deleteNote,
  updateNote,
} = require("../controllers/note-controller");

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.get("/:id", getNote);

router.delete("/:id", deleteNote);

router.patch("/:id", updateNote);

module.exports = router;
