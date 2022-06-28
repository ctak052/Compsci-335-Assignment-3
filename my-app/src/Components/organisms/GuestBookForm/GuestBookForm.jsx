import {CommentForm, CommentText, UsersName} from './styles'
import ErrorText from '../../atoms/ErrorText/ErrorText'

const guestBookForm = (props) => {
  return (
    <CommentForm onSubmit={props.onSubmitNewComment}>
      <div style={{ width: "100%" }}>
        <CommentText
          rows="8"
          style={{ width: "90%" }}
          placeholder="Start typing your comment here"
        />
      </div>
      {(props.errorText.commentArea != "") && <ErrorText errorText={props.errorText.commentArea}/> } 
      <label htmlFor="nameInput">
        Your Name: <UsersName name="nameInput" />
      </label>
      <button type="submit" className="btn_default md">
        Submit
      </button>
      {(props.errorText.nameArea != "") && <ErrorText errorText={props.errorText.nameArea}/> } 
    </CommentForm>
  );
};

export default guestBookForm
