import React from "react";
import {Routes , Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "./footer";
import Home from "./Home";
import Course from "./Course.jsx";
import Signup from "./Signup.jsx"

export default function App(props) {
  return (
    <>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/course" element={<Course></Course>}></Route>
      <Route path="/signup" element={<Signup />} />
    </Routes>
      <Footer></Footer>

    </>
  );
}
