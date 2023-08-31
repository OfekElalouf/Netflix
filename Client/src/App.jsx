import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Pages/LoginPage/auth";
import Register from "./Pages/Register/register";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import SeriesPage from "./Pages/SeriesPage/SeriesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Auth></Auth>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route path="/series" element={<SeriesPage></SeriesPage>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
