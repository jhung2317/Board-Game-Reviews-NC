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

  return (
    <main>
      <h4><u>Comments to This Review</u></h4>
      {commentList.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
    </main>
  );
}

export default CommentList;