const {
    handleGetAllNotes,
    handleGetNoteById,
    handleGetNoteCount,
    handleCreateNote,
    handleDeleteNote,
    handleGetAllBoardNames,
} = require("./handlers.js")
const express = require("express");

const router = express.Router();

router.get("/:boardName", handleGetAllNotes);

// note that count wouldn't be confused with :noteId below since noteIds are UUIDs,
// and can't have "count"as a note Id.
router.get("/:boardName/count", handleGetNoteCount)


router.get("/:boardName/:noteId", handleGetNoteById)

router.get("/", handleGetAllBoardNames)

router.post("/:boardName", handleCreateNote)

router.delete("/:boardName/:noteId", handleDeleteNote)

module.exports = router;
