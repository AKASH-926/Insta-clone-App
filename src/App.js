import "./App.css";

import Homepage from "./components/Home_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import NewPost from "./components/createPost/NewPost";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<NewPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
