import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { CartProvider } from "react-use-cart";

//import reactLogo from './assets/react.svg'
import "./AppStyle/app.css";

import Header from './components/header/header';
import Landing from './components/landing/landing';
import Providers from './components/categories/providers';
import GhazawyMall from "./components/clients/ghazzawy/ghazawy";
import Laptops from './components/categories/products/laptops/Laptops';
import GlobalCart from "./components/cartGlobal/globalcart";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/providers' element={<Providers />} />
        <Route path='/ghazawy-2' element={<GhazawyMall />} />
        <Route path='/categories/laptops' element={<Laptops />} />
        <Route path='/cart' element={<GlobalCart />} />
      </Routes>
    </Router>
  )
}

export default App



  