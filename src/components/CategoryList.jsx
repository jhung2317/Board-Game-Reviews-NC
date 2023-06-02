import { useEffect, useState } from "react";
import { getAllCategories } from "../utils/utils";
import { Navigate } from "react-router-dom";
import '../App.css'
import ReviewList from "./ReviewList";
import { Link } from "react-router-dom";


function CategoryList({setFilter}) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAllCategories().then((cat) => {
      setCategory(cat)
    });
  }, []);
  
  const handleClick = (catName) => {
    setFilter(catName)
  }
  
  return (
    <section>
      <h2>All Categories</h2>
      {category.map((cat) => {
        return (
          <section className="categoryCard" key={cat.slug} style={{border: "1px solid grey"}}>
          <h3>{cat.slug}</h3>
          <p>{cat.description}</p>
          {/* <button
            onClick={() => {
              return handleClick(cat.slug)
            }}>
            Show Reviews
          </button> */}
          <Link to="/ReviewList" 
          className="u-text-transform"
          onClick={() => {
              return handleClick(cat.slug)
            }}>Show Reviews</Link>

        </section>
        )
      })}
    </section>
  );
}

export default CategoryList;