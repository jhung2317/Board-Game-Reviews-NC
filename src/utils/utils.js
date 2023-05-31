export const getAllCategories = () => {
  return fetch("https://ncgames-tsyc.onrender.com/api/categories")
    .then((res) => {
      return res.json();
    })
    .then(({ category }) => {
      return category;
    });
};

export const getAllReviews = () => {
  return fetch("https://ncgames-tsyc.onrender.com/api/reviews")
    .then((res) => {
      return res.json();
    })
    .then(({ Review }) => {
      return Review;
    });
};

export default { getAllCategories, getAllReviews};
