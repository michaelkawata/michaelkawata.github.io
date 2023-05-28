import React from "react";
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from "./assets/component/Layout";

function App() {
  return (
    <div className="App" >
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;