import { Link } from "react-router-dom";


function NavBar(setFilter) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/CategoryList">All Categories</Link>
      <Link to="/ReviewList" onClick={() => {
              return setFilter("")
            }}>All Reviews</Link>

    </nav>
  );
}

export default NavBar;
