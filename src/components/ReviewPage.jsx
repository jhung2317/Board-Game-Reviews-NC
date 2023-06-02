import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/utils";
import moment from "moment";
import CommentList from "./CommentList";
import './css/reviewPage.css'

function ReviewPage() {
  const {review_id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [singleReview, setSingleReview] = useState({});
  const {
    title,
    designer,
    owner,
    review_img_url,
    review_body,
    category,
    created_at,
    votes,
    comment_count,
  } = singleReview;
  const formattedDate = moment(created_at).format("D MMM YYYY");

  useEffect(() => {
    getReviewById(review_id)
      .then((review) => {
        setSingleReview(review[0])
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <main>
      <article>
        <h3 ><u> {title} </u></h3>
        <p className="subtitleInReviewPage">By {owner} at {formattedDate}</p>
        <img src={review_img_url} alt={`${title}`}></img>
        <h4 ><u> Review: </u></h4>
        <p className="review_body"> {review_body}</p>
        <p className="Author"> Designed by: {designer}</p>
        <p class="voting-box">{votes}</p>
        <h4><u>Comments to This Review</u></h4>
      <CommentList/>
      </article>

    </main>
  );
}


export default ReviewPage