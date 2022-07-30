import React from "react";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/random" element={<RandomMeal />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
