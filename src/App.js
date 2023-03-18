import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NoPage from "./Pages/NoPage";
import Register from "./Pages/Register";
import Category from "./Pages/SingleCat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProf from "./Pages/UserProf";
<<<<<<< HEAD
import Cart from "./Pages/Cart";
=======
import SingleCat from "./Pages/SingleCat";
>>>>>>> 056f5795e1d4df4d45013414d2be878367d1bd43

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<NoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProf />} />
<<<<<<< HEAD
          <Route path="/cart" element={<Cart />} />
=======
          <Route path="/category" element={<Category />} />
          <Route path="/single" element={<SingleCat />} />
>>>>>>> 056f5795e1d4df4d45013414d2be878367d1bd43
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
