import React from "react";

import {
  Routes,
  Route
} from "react-router-dom";
import Home from './views/Home.js'
import Login from './views/LoginScreen.js'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/users" element={<Users />} />
    </Routes>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}