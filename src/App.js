import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import PostDetails from "./components/postDetails/PostDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/post/:id" element={<PostDetails />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
