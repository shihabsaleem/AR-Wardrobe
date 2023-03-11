import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Login />} />
            <Route path="contact" element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
