import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection"
import ProductDetails from "./pages/productdetails/ProductDetails";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/slice/categorySlice/CategorySlice";
import Payment from "./components/payment/Payment";

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])
  
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Collection/>} />
          <Route path="/products/:productId?" element={<ProductDetails />} />
          <Route path="/payments/:status?" element={<Payment/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
