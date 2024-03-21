const {uuid} = require('uuidv4');

/**
 * PostBoard is a class that represents a post-board database containing post boards
 * It doesn't actually persist any data, but acts as a mock for the purpose of
 * the demo project
 */
class PostBoard {
    constructor() {
        // the keys of the map are post board names that uniquely identify a post board
        // the values are an array of notes in the post-board in the format:
        // {id: "d37a85b8-957c-4da3-a5a2-23360deda11c", <- uuid v4
        //  ts: 1710943804, <- unix timestamp
        //  content: "Yo Remember the turn off the light Jeff!" }
        this.boards = new Map();
    }

    /**
     * Create a new post board
     * @param boardName the name of the post board
     * @param noteId the id of the message
     * @returns {*|null} the note in question
     */
    getNoteById(boardName, noteId) {
        const board = this.boards.get(boardName);
        if (board == null) {
            return null;
        }
        return board.find(m => m.id === noteId);
    }

    getAllBoardNames() {
        return Array.from(this.boards)
            .map(([boardName, content]) => boardName)
    }

    /**
     * Get the number of notes in a post board
     * @param boardName
     * @returns {*|number}
     */
    getNoteCount(boardName) {
        const board = this.boards.get(boardName);
        if (board == null) {
            return 0;
        }

        return board.length;
    }

    getAllNotes(boardName) {
        const board = this.boards.get(boardName);
        if (board == null) {
            return [];
        }
        return board;
    }

    _createBoardIfNotExists(boardName) {
        if (!this.boards.has(boardName)) {
            this.boards.set(boardName, []);
        }
    }

    _getCurrentTimestamp() {
        return Math.floor(Date.now() / 1000);
    }

    insertNote(boardName, noteContent) {
        this._createBoardIfNotExists(boardName);

        const ts = this._getCurrentTimestamp();
        const id = uuid();
        const message = {id, ts, content: noteContent}
        this.boards.get(boardName).push(message);
        return id;
    }

    deleteNote(boardName, noteId) {
        if (!this.boards.has(boardName)) {
            return false; // board doesn't exist
        }

        const board = this.boards.get(boardName);
        const idx = board.findIndex(n => n.id === noteId);
        if (idx < 0) {
            return false; // note not found in the board
        }

        board.splice(idx, 1);
        return true;
    }
}

const MockDB = new PostBoard();
MockDB.boards
    .set("global", [
        {
            id: "d37a85b8-957c-4da3-a5a2-23360deda11c",
            ts: 1710943804,
            content: "Welcome to the Post Board App!"
        },
        {
            id: "0ee925d6-cd6f-4bef-a1f9-29a5e152e892",
            ts: 1710943805,
            content: "You are in the global post board, you can switch to any other post board as you like!"
        }
    ])
    .set("gossips", [
        {
            id: "fbe11381-f537-4e30-8004-da83e54435ae",
            ts: 1710943804,
            content: "I heard that Jeff is going to propose to his girlfriend!"
        },
        {
            id: "df989928-e660-4b88-b619-4a3ba4511c3c",
            ts: 1710943805,
            content: "Apparently the new intern is dating the boss!"
        },
        {
            id: "309d9c0b-247b-44dd-b285-52a678037066",
            ts: 1710943806,
            content: "There's no way I just saw Romain Soubeyran on a dating site"
        }
    ])

module.exports = {
    MockDB
}
