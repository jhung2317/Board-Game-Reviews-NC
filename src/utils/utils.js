import axios from 'axios'
const API = axios.create({ baseURL: 'https://ncgames-tsyc.onrender.com/api' })

export const getAllCategories = () => {
  return API.get("/categories")
    .then(({data}) => {
      console.log(data.category)
      return data.category
    })
    .catch((error) => {
      // handle error
      console.log(error);
  })
};

export const getAllReviews = () => {
  return API.get("/reviews")
    .then(({data}) => {
      console.log(data.Review)
      return data.Review
    })
    .catch((error) => {
      // handle error
      console.log(error);
  })
};

export default { getAllCategories, getAllReviews};
