import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar"; // Import your Navbar component here
import NetworkAutomation from "./pages/NetworkAutomation"; // Import your NetworkAutomation page here
// Import other pages/components as needed

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/NetworkAutomation" element={<NetworkAutomation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
