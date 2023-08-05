import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import UserProfilePage from "./pages/UserProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import ARView from "./components/features/AR/ARView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Note: In old app, /category -> SingleCat (list of products in category?) 
              and /single -> SingleCat (same component?)
              Checking old App.js: 
              <Route path="/category" element={<Category />} />  (Category was SingleCat)
              <Route path="/single" element={<SingleCat />} />
              So both pointed to SingleCat. I will point both to CategoryPage.
          */}
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/single" element={<CategoryPage />} />

          <Route path="/pro" element={<ProductPage />} />
          <Route path="/try-on" element={<ARView />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
