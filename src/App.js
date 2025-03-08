import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CrudPage from "./CrudPage";
import Product1 from "./Product1";
import Product2 from "./Product2";

function App() {
  return (  
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Food CRUD App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/crudpage">Manage Foods</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crudpage" element={<CrudPage />} />
        <Route path="/product1" element={<Product1 />} /> 
        <Route path="/product2" element={<Product2 />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
