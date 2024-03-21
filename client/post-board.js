// constants
const BACKEND_PREFIX = "http://localhost:8080/post-board"
const PULL_INTERVAL = 5000; // pull messages every 5 seconds

// global variable, posts fetched from the backend and that we show on the page
let posts = [
    {
        id: "d37a85b8-957c-4da3-a5a2-23360deda11c",
        ts: 1710943800,
        content: "Welcome to the Post Board App!"
    },
    {
        id: "0ee925d6-cd6f-4bef-a1f9-29a5e152e892",
        ts: 1710943801,
        content: "You are in the global post board, you can switch to any other post board as you like!"
    }
];

/**
 * showPosts populates the page with the posts in the global 'posts' variable
 */
const showPosts = () => {
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = '';
    
    posts.forEach(({id, ts, content}) => {
        const milliseconds = ts * 1000;
        const dateString = new Date(milliseconds).toLocaleDateString();

        // create the DOM node representing the message
        const li = document.createElement('li');
        li.className = "message-body";
        li.innerHTML = `${content}
                        <br/>
                        <small class="message-date">
                            --${dateString}
                        </small>`

        // delete button and the callback function
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = async () => {
            const result = await fetch(
                `${BACKEND_PREFIX}/${getCurrBoardName()}/${id}`,
                {
                    method: "DELETE"
                }
            )

            if (!result.ok) {
                alert("Failed to delete message");
                return;
            }

            await fetchDataAndShowPost();
        }

        li.appendChild(deleteButton);

        messageList.appendChild(li);
    })
}

/**
 * getCurrBoardNameFromSearchParams reads the "boardName" param in the url
 * and returns it if present, and fallbacks to "global" if
 * param is not present
 */
const getCurrBoardName = () => {
    const boardName = new URL(document.location.href).searchParams.get("boardName")
    return boardName || "global";
}

const setCurrBoardName = (boardName) => {
    const currUrl = new URL(document.location.href);
    currUrl.searchParams.set('boardName', boardName);
    document.location.href = currUrl.toString();
}

/**
 * Fetch posts from current post board from the server and populate
 * the page with the messages.
 *
 * It returns true if the posts were fetched successfully and updated.
 */
const fetchPosts = async () => {
    const boardName = getCurrBoardName();

    const response = await fetch(
        `${BACKEND_PREFIX}/${boardName}`,
        {
            method: "GET",
            headers: {
                // "If-Modified-Since": "Wed, 21 Oct 2015 07:28:00 GMT"// TODO: Add real values
            }
        })

    if (response.status === 304) {
        // resource hasn't been modified since our last pull, nothing to do here
        return false;
    }

    if (!response.ok) {
        alert("Failed to fetch posts");
        return false;
    }

    posts = await response.json(); // parse body
    return true;
}

/**
 * fetchDataAndShowPost fetches posts only if there are new notes
 * written on the post board since we last fetched the notes
 * and updates the page if needed
 * @returns {Promise<void>}
 */
const fetchDataAndShowPost = async () => {
    const updated = await fetchPosts();
    if (!updated) return;
    showPosts();
}

/**
 * onSendMessage is the callback for the submit button.
 * It sends the message to the server and updates the page.
 */
const onSendMessage = async (event) => {
    event.preventDefault();

    const currBoardName = getCurrBoardName();
    const inputTextArea = document.getElementById("new-msg");
    const userInput = inputTextArea.value

    if (!userInput || userInput.length === 0) {
        alert("Please enter a message to send");
        return;
    }

    const result = await fetch(
        `${BACKEND_PREFIX}/${currBoardName}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: userInput
            })
        }
    )

    if (!result.ok) {
        alert("Failed to send message.");
        return;
    }

    // clear user input
    inputTextArea.value = '';
    await fetchDataAndShowPost();
}

const submitButton = document.getElementById("btn-submit");
submitButton.onclick = onSendMessage;

const boardNameElement = document.getElementById("board-name");
const changeBoardButton = document.getElementById("change-board");
changeBoardButton.onclick = () => {
    setCurrBoardName(boardNameElement.value);
    fetchDataAndShowPost().then();
}

// pull periodically messages from the server
// an alternative would be to have bidirectional communication through websockets
// but I'm just too lazy to do it
fetchDataAndShowPost().then(); // explicitly ignore the promise
setInterval(fetchDataAndShowPost, PULL_INTERVAL)



