
import "./App.css";

import Homepage from "./components/Home_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewPost from "./components/createPost/NewPost";
import Landing_page from "./components/Landing page/landing_page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/instaclone" element={<Homepage />} />
          <Route path="/add" element={<NewPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
