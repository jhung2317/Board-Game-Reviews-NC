import { useEffect } from "react";
import { getAllReviews } from "../utils/utils";
import ReviewCard from "./ReviewCard";



function ReviewList({reviewList, setReviewList}) {

  useEffect(() => {
    getAllReviews().then((review) => {
      setReviewList(review)
    });
  }, []);

  return (
    <section>
      <h2>All Reviews</h2>
      {reviewList.map((review) => {
        return (
          <ReviewCard
          key={review.review_id}
          review={review} />
        )
      })}

    </section>
  );
}

export default ReviewList;