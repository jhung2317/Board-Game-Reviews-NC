import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsByReviewId } from "../utils/utils";

function CommentList() {
  const { review_id } = useParams();
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getCommentsByReviewId(review_id)
      .then((comment) => {
        setCommentList(comment)
      })
  }, []);

  if (!commentList) {
    return (
      <main >
              <h4><u>Comments to This Review</u></h4>
        <h3>
          Look like there is nothing here. Why not start the conversation?
        </h3>
        <form>
          <textarea
            required
            name="review_body"
            className="form-control"
            placeholder="What do you think?"
          ></textarea>
        </form>
      </main>
    );
  }
  return (
    <main>
      <h4><u>Comments to This Review</u></h4>
      {
      commentList.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })
        }
    </main>
  );
}

export default CommentList;