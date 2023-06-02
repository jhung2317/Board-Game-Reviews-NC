import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import CategoryList from './components/CategoryList';
import './App.css'
import NavBar from "./components/NavBar";
import ReviewList from './components/ReviewList';
import WelcomeMessage from "./components/WelcomeMessage";
import ReviewPage from './components/ReviewPage';


function App() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h1>Welcome to My Games Reviews</h1>
      <NavBar setFilter={setFilter}/>
      <Routes>
        <Route path="/" element={<WelcomeMessage />}></Route>
        <Route path="/ReviewList" 
        element={<ReviewList 
        filter={filter}
        />}> 
        </Route>
        <Route path="/CategoryList" element={<CategoryList setFilter={setFilter}/>}></Route>
        <Route path="/reviews/:review_id" element={<ReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
