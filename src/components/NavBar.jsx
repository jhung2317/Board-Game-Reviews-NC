import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/CategoryList">All Categories</Link>
      <Link to="/ReviewList">All Reviews</Link>

    </nav>
  );
}

export default NavBar;
