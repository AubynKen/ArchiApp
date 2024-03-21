/**
 * getCurrBoardName reads the "boardName" param in the url
 * and returns it if present, and fallbacks to "global" if
 * param is not present
 */
const getCurrBoardName = () => {
    const {boardName} = new URL(document.location).searchParams;
    return boardName || "global";
}

/**
 * updateMessages fetches messages from the server and populates the current postboard
 */
const updateMessages = () => {
    const boardName = getCurrBoardName();

}
