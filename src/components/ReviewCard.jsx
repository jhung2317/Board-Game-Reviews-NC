import { Link } from 'react-router-dom';
import '../app.css'
import '../button.css'

function ReviewCard({ review }) {
  const { title, comment_count, created_at, designer, votes, review_id } = review;

  return (
    <section class="reviewCard" style={{ border: "1px solid grey" }}>
      <h3>{title}</h3>
      <p>Designer: {designer}</p>
      <p>Comments: {comment_count}</p>
      <p>Votes: {votes}</p>
      <p>Date: {created_at}</p>
      <Link
        to={`/reviews/${review.review_id}`}
        className="link-dark"
      >
      <div class="u-text-transform" 
        onClick={() => {
          console.log("enter individual review page")
        }}>
          Go Review</div></Link>
    </section>
  );
}

export default ReviewCard;
