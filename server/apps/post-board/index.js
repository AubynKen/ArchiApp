const {
    handleGetAllNotes,
    handleGetNoteById,
    handleGetNoteCount,
    handleCreateNote,
    handleDeleteNote,
    handleGetAllPostBoards,
} = require("./handlers.js")
const express = require("express");

const router = express.Router();

router
    .get("/:boardName", handleGetAllNotes)
    .get("/:boardName/count", handleGetNoteCount)
    .get("/:boardName/:noteId", handleGetNoteById)
    .get("/", handleGetAllPostBoards)
    .post("/:boardName", handleCreateNote)
    .delete("/:boardName/:noteId", handleDeleteNote)

module.exports = router;
