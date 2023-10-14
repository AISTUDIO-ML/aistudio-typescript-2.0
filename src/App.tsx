import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/style.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import MoreSteps from "./components/signup/MoreSteps";
import Hosting from "./components/hosting/Hosting";
import PricingTable from "./components/pricingTable/PricingTable";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth-steps" element={<MoreSteps />} />
          <Route path="/platform-usage" element={<Hosting />} />
          <Route path="/checkout" element={<PricingTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
