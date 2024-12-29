import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import ViewTask from "./pages/ViewTask";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <header>
          <h1>Task Manager App</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/view/:id" element={<ViewTask />} />
        </Routes>
        <footer>
          <p>© 2024 Task Manager. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
