import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/index';
import Contact from './pages/contact';
import Catalog from './pages/catalog';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/catalog" component={Catalog} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;