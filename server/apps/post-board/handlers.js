const {MockDB} = require("./database.js");

const handleGetAllNotes = (req, res) => {
    const {boardName} = req.params;
    const notes = MockDB.getAllNotes(boardName);
    res.send(notes);
};

const handleGetNoteById = (req, res) => {
    const {boardName, noteId} = req.params;
    const note = MockDB.getNoteById(boardName, noteId);
    if (note == null) {
        // 404 not found
        return res.status(404).send("note not found");
    }

    res.send(note);
};

const handleGetNoteCount = (req, res) => {
    const {boardName} = req.params;
    const count = MockDB.getNoteCount(boardName);
    res.send({boardName, count});
};

const handleCreateNote = (req, res) => {
    const {boardName} = req.params;
    const note = req.body;
    const id = MockDB.insertNote(boardName, note);

    res.status(201).send({id});
};

const handleDeleteNote = (req, res) => {
    const {boardName, noteId} = req.params;
    const success = MockDB.deleteNote(boardName, noteId);
    if (!success) {
        return res.status(404).send("note not found");
    }

    res.status(200).send();
}

const handleGetAllBoardNames = (req, res) => {
    const boardNames = MockDB.getAllBoardNames();
    res.json(boardNames);
}

module.exports = {
    handleGetAllNotes,
    handleGetNoteById,
    handleGetNoteCount,
    handleCreateNote,
    handleDeleteNote,
    handleGetAllPostBoards: handleGetAllBoardNames
}
