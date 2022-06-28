import { postJson } from "./fetch"
const postCommentURL = "http://localhost:5000/api/WriteComment"

const postComment = (commentString) => {
    return postJson(postCommentURL, commentString);
}

export const guestAPI = {
    postComment
}