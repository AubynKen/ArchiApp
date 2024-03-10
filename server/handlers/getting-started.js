const handleHello = (req, res) => {
    res.send("Hello");
}

const handleGetJsonArray = (req, res) => {
    const arr = ["Hola", "Mundo"];
    res.send(arr);
}

const handleGetTest = (req, res) => {
    let {messageContent: content} = req.params;
    if (content === undefined) {
        content = "No content provided";
    }

    res.send({
        msg: content
    });
}

const handleGetJsonObject = (req, res) => {
    res.send({
        "a": 1,
        "b": 2
    });
}

module.exports = {
    handleHello,
    handleGetJsonArray,
    handleGetJsonObject,
    handleGetTest
}
