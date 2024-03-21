const setDefaultChatroom = (req, res, next) => {
    req.query.chatroom = req.query.chatroom || "global"; // insert default value if not present
    next();
}
