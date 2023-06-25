import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NoPage from "./Pages/NoPage";
import Register from "./Pages/Register";
import Category from "./Pages/SingleCat";
import UserProf from "./Pages/UserProf";
import Cart from "./Pages/Cart";
import SingleCat from "./Pages/SingleCat";
import Product from "./Pages/Product";
import Watch from "./Components/WatchS";
//import Ar from "./Pages/Ar"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<NoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProf />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<Category />} />
          <Route path="/single" element={<SingleCat />} />
          <Route path="/pro" element={<Product/>} />
          {/* <Route path="/ar" element={<Ar/>} /> */}
          <Route path="*" element={<NoPage />} />
          


          <Route path="/pro/watch" element={<Watch/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
