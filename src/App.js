import React from "react";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/random" component={RandomMeal} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
