import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { CartProvider } from "react-use-cart";

//import reactLogo from './assets/react.svg'
import "./AppStyle/app.css";

import MainHeader from './components/header/header';
import Landing from './components/landing/landing';
import Clients from './components/clients/clients';
import GhazawyMall from "./components/clients/ghazzawy/ghazawy";
import Laptops from './components/categories/products/laptops/Laptops';
import SmartPhone from "./components/categories/products/smartphones/smartphone";
import GlobalCart from "./components/cartGlobal/globalcart";
import MainFooter from "./components/footer/footer";
import NoPage from "./components/page404/nopage";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router className="App">
      <MainHeader />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/providers' element={<Clients />} />
        <Route path='/ghazawy-2' element={<GhazawyMall />} />
        <Route path='/categories/laptops' element={<Laptops />} />
        <Route path='/categories/smartphones' element={<SmartPhone />} />
        <Route path='/cart' element={<GlobalCart />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <MainFooter/>
    </Router>
  )
}

export default App



  