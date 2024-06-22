import Home from "./components/Home";
import AboutUs from "./components/About";
import ObjectDetect from "./components/ObjDetect";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/objectdetect" element={<ObjectDetect />} />
      </Routes>
    </Router>
  );
};

export default App;
