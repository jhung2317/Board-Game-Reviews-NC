import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsByReviewId } from "../utils/utils";

function CommentList() {
  const { review_id } = useParams();
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getCommentsByReviewId(review_id)
      .then((comment) => {
        setCommentList(comment)
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!commentList) {
    return (
      <main >
        <h4>
          There is no comment for this review. Wanna start a conversation?
        </h4>
        <form>
        <div className="new-comment-area"><textarea
            required
            name="review_body"
            className="form-control"
            placeholder="What do you think?"
          ></textarea>
          <button className="submit-button">Submit</button></div>
        </form>
      </main>
    );
  }
  return (
    <main>
      <form>
        <div className="new-comment-area"><textarea
            required
            name="review_body"
            className="form-control"
            placeholder="What do you think?"
          ></textarea>
          <button className="submit-button">Submit</button></div>
        </form>
      {
      commentList.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })
        }
    </main>
  );
}

export default CommentList;