import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import CategoryList from './components/CategoryList';
import './app.css'
import NavBar from "./components/NavBar";
import ReviewList from './components/ReviewList';
import WelcomeMessage from "./components/WelcomeMessage";


function App() {
  const [category, setCategory] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  return (
    <div>
      <h1>Welcome to My Games Reviews</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeMessage />}></Route>
        <Route path="/ReviewList" element={<ReviewList reviewList={reviewList} setReviewList={setReviewList}/>}></Route>
        <Route path="/CategoryList" element={<CategoryList category={category} setCategory={setCategory}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
