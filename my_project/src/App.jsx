import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Product from "./Product.jsx";
import Cart from "./Cart.jsx";
import Head from "./Head.jsx";
// import Electronices from "./Electronices.jsx";
// import Bags from "./Bags.jsx";


function App() {
  
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        {/* <Route path="/Electronices" element={<Electronices />}></Route>
        <Route path="/Bags" element={<Bags />}></Route> */}
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
