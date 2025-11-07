import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import TopNavbar from "./pages/TopNavbar";
import Order from "./pages/Order";

const App = () => {
  const [islogin, setislogin] = useState(false);
  const location = useLocation(); 

  const showFooter = location.pathname === "/" ;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar islogin={islogin} setislogin={setislogin} />
      {islogin && <TopNavbar />}

      <div className="flex-grow pt-[140px]">
        <Routes>
          <Route path="/" element={<Home islogin={islogin} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login setIsLoggedIn={setislogin} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setislogin} />} />
          <Route path="/order" element={<Order/>} />
        </Routes>
      </div>

      {showFooter && <Footer />}
    </div>
  );
};

export default App;
