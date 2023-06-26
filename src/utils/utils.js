import axios from 'axios'
const API = axios.create({ baseURL: 'https://ncgames-tsyc.onrender.com/api' })

export const getAllCategories = () => {
  return API.get("/categories")
    .then(({data}) => {
      return data.category;
    })
    .catch((error) => {
      // handle error
      console.log(error);
  })
};

export const getAllReviews = (filter) => {
  return API.get("/reviews")
  .then(({data}) => {
    if (filter !== ""){
      const filteredArray = data.Review.filter((review) => review.category === filter)
      return filteredArray
    } else {
      return data.Review
    }
  })
  .catch((error) => {
      console.log(error);
  })
};

export const getReviewById = (review_id) => {
  return API.get(`/reviews/${review_id}`)
  .then(({data}) => {
    return data.review;
  })
  .catch((error) => {
    console.log(error);
  })
};

export const getCommentsByReviewId = (review_id) => {
  return API.get(`/reviews/${review_id}/comments`)
  .then(({data}) => {
    return data.comments;
  })
  .catch((error) => {
    console.log(error);
  })
};

export const updateVoteOfReview = (review_id, inc_votes) => {
  return API.patch(`/reviews/${review_id}`, { inc_votes })
  .then(({data}) => data)
  .catch((error) => {
    console.log(error);
  })
};
export const updateVoteOfComment = (comment_id, inc_votes) => {
  return API.patch(`/comments/${comment_id}`, { inc_votes })
  .then(({data}) => data)
  .catch((error) => {
    console.log(error);
  })
};