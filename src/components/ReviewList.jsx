import { useState, useEffect } from "react";
import { getAllReviews } from "../utils/utils";
import ReviewCard from "./ReviewCard";


function ReviewList({filter}) {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllReviews(filter).then((review) => {
      setReviewList(review)
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
    <h2>All {filter} Games' Reviews</h2>
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