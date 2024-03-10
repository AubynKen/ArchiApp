msgs = [
    {"msg": "Hello World"},
    {"msg": "Blah Blah"},
    {"msg": "I love cats"}
];

const showMessages = (messages) => {
    // empty the message list
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = '';

    // add each message to the list
    for (const msg of messages) {

        const li = document.createElement('li');
        li.className = "message-body";
        li.appendChild(document.createTextNode(msg.msg));

        messageList.appendChild(li);
    }
}

const update = showMessages; // alias

update(msgs);

document
    .querySelector("#message-form > button")

    .addEventListener("click", (e) => {
        e.preventDefault();

        const input = document.getElementById('new-msg').value;
        msgs.push({"msg": input});
        update(msgs);
    })
