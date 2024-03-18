const {v4: uuidv4} = require("uuid");
const allMessages = [
    {id: "0", content: "Hello World"},
    {id: "1", content: "foobar"},
    {id: "2", content: "CentraleSupelec Forever"}
];

const handleGetMessageById = (req, res) => {
    const {id: messageId} = req.params;
    const message = allMessages.find(m => m.id === messageId);

    if (message === undefined) {
        return res.json({code: 0});
    }

    res.json({
        code: 1,
        message: message.content
    });
};

const handleGetMessageCount = (req, res) => {
    const numberOfMessages = allMessages.length;
    res.send(numberOfMessages)
};

const handleGetAllMessages = (req, res) => {
    const contentArr = allMessages.map(element => element.content);
    res.json(contentArr);
};

const handlePostMessage =  (req, res) => {
    const {message} = req.params;
    const id = uuidv4();

    allMessages.push({
        id,
        content: unescape(message)
    });

    res.send(id);
};


module.exports = {
    handleGetMessageById,
    handleGetMessageCount,
    handleGetAllMessages,
    handlePostMessage,
}
