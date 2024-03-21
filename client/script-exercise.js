const SERVER_ADDR = "http://localhost:8080";

DEFAULT_MESSAGES = [
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

const update = () => showMessages(DEFAULT_MESSAGES); // alias
update();

// add event listener to the button to append a new message
document
    .querySelector("#message-form > button")

    .addEventListener("click", (e) => {
        e.preventDefault();

        const input = document.getElementById('new-msg').value;
        DEFAULT_MESSAGES.push({"msg": input});
        update(DEFAULT_MESSAGES);
    })

/**
 * Fetches all messages from the server asynchronously.
 *
 * @async
 * @returns {Promise<string[]>} A promise that resolves with an array of messages in string format.
 */
const getAllMessages = async () => {
    const url = `${SERVER_ADDR}/msg/getAll`;
    const response = await fetch(url);
    return await response.json();
}

/**
 * Loads all messages from the server and displays them.
 * If no messages are available, it falls back to the default messages.
 *
 * @async
 * @returns {Promise<void>}
 */
const loadMessages = async () => {
    const messages = await getAllMessages();

    if (messages.length === 0) {
        // fallback to placeholder messages
        showMessages(DEFAULT_MESSAGES);
        return;
    }

    const firstMessage = messages[0];
    alert(firstMessage);

    // convert format to re-use the existing showMessages function
    showMessages(messages.map(msg => ({msg})));
}

loadMessages()
    .then(); // explicitly ignore the return value
