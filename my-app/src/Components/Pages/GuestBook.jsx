import PageTemplate from "../organisms/PageTemplate/PageTemplate";
import React, { useState } from "react";
import { guestAPI } from "../../api/guestbookAPI";
import GuestBookForm from "../organisms/GuestBookForm/GuestBookForm"
import IFrame from '../atoms/IFrame/IFrame'
const GuestBook = (props) => {
  const [iframeKey, setIframeKey] = useState(3);
  const [errorText, setErrorText] = useState({commentArea:"", nameArea:""});
  const submitHandler = (event) => {
    event.preventDefault();
    const userComment = event.target[0].value;
    const userName = event.target[1].value

    const commentAreaError = ((/\S/.test(userComment))) ? "" : "Please make a comment on your experience here. "
    const userAreaError = ((/\S/.test(userName))) ? "" : "Please enter a name so everyone can know who you are. "
    setErrorText({commentArea:commentAreaError, nameArea:userAreaError})
    if(commentAreaError === "" && userAreaError === ""){
      const commentString = JSON.stringify({
        Comment: userComment,
        Name: userName,
      });
  
      //clears both inputs
      event.target[0].value = "";
      event.target[1].value = "";
      guestAPI.postComment(commentString).then(() => {
        setIframeKey(Math.random())
      });
    }    
  };

  return (
    <PageTemplate title="Guest Book" version={props.version}>
        <h3>Please sign our guest book to let us, and others know who visited!</h3>
			  <h5>Please respect others at all times, especially when posting comments</h5>
        <GuestBookForm errorText={errorText} onSubmitNewComment={submitHandler}/>
        <IFrame key={iframeKey} src="http://localhost:5000/api/GetComments" title="Guest Comments" scrolling="yes" />
    </PageTemplate>
  );
};

export default GuestBook;
