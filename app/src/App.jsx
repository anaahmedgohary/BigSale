import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { CartProvider } from "react-use-cart";

//import reactLogo from './assets/react.svg'
import "./AppStyle/app.css";

import MainHeader from './components/header/header';
import Landing from './components/landing/landing';
import Clients from './components/clients/clients';
import GhazawyMall from "./components/clients/ghazzawy/ghazawy";
import FeaturedDeals from "./components/featured/FeaturedDeals";
import Laptops from './components/categories/products/laptops/Laptops';
import SmartPhone from "./components/categories/products/smartphones/smartphone";
import DeskTops from "./components/categories/products/desktops/DeskTops";
import GlobalCart from "./components/cartGlobal/globalcart";
import MainFooter from "./components/footer/footer";
import NoPage from "./components/page404/nopage";
import Checkout from "./components/checkout/checkout";
// import SideCart from "components/cartGlobal/sidecart/test";
import Mainsidebar from "components/mainsidebar/mainsidebar";
// checkoutcart


function App() {
  //const [count, setCount] = useState(0)
  return (
    <Router className="App">
      <MainHeader />
      <Mainsidebar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/t' element={<Mainsidebar />} />
        <Route path='/providers' element={<Clients />} />
        <Route path='/ghazawy-2' element={<GhazawyMall />} />
        <Route path='/categories/featured' element={<FeaturedDeals />} />
        <Route path='/categories/laptops' element={<Laptops />} />
        <Route path='/categories/smartphones' element={<SmartPhone />} />
        <Route path='/categories/desktops' element={<DeskTops />} />
        <Route path='/cart' element={<GlobalCart />} />
        <Route path='/checkoutcart' element={<Checkout />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <MainFooter/>
    </Router>
  )
}

export default App



  