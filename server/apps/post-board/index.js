const {
    handleGetAllNotes,
    handleGetNoteById,
    handleGetNoteCount,
    handleCreateNote,
    handleDeleteNote
} = require("./handlers.js")
const express = require("express");

const router = express.Router();

router
    .get("/:boardName", handleGetAllNotes)
    .get("/:boardName/count", handleGetNoteCount)
    .get("/:boardName/:noteId", handleGetNoteById)
    .post("/:boardName", handleCreateNote)
    .delete("/:boardName/:noteId", handleDeleteNote)

module.exports = router;
