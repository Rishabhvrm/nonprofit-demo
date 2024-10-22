import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Activities from "./Header/Routes/Activities";
import Programs from "./Header/Routes/Programs";
import "./App.css";
import Community from "./Header/Routes/Community";
import GetInvolved from "./Header/Routes/GetInvolved";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/nonprofit-demo/" element={<Body />} />  {/* Default route */}
          <Route path="/get-involved" element={<GetInvolved />} />  
          <Route path="/programs" element={<Programs />} />  
          <Route path="/activities" element={<Activities />} />  {/* Route for Activities */}
          <Route path="/community" element={<Community />} />  {/* Route for Community */}
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
