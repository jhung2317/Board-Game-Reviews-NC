import { useEffect } from "react";
import { getAllCategories } from "../utils/utils";
import '../App.css'

function CategoryList({category, setCategory}) {
  
  useEffect(() => {
    getAllCategories().then((cat) => {
      setCategory(cat)
    });
  }, []);
  
  const handleClick = () => {
    console.log("category clicked!")
  }
  
  
  return (
    <section>
      <h2>All Categories</h2>
      {category.map((cat) => {
        return (
          <section className="categoryCard" style={{border: "1px solid grey"}}>
          <h3>{cat.slug}</h3>
          <p>{cat.description}</p>
          <button
            onClick={() => {
              return handleClick()
            }}>
            Show Reviews
          </button>
        </section>
        )
      })}
    </section>
  );
}

export default CategoryList;