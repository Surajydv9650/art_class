import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Hero from "./Components/Hero/Hero";
import Curriculam from "./Components/Curriculam/Curriculam";
import Pricing from "./Components/Pricing/Pricing";
import Art_area from "./Components/Art_Areas/Art_area";
import Enroll from "./Components/Enrollment/Enroll";
import Customer from "./Components/Customer/Customer";
import Showcase from "./Components/Showcase/Showcase";
import Art_workshop from "./Components/Art_Workshop/Art_workshop";
import Formenroll from "./Components/Formenroll/Formenroll";

// Import the other pages from your "Other_Pages" folder
import About from "./Other_Pages/About/About";
import Classes from "./Other_Pages/Classes/Classes";
import Contact from "./Other_Pages/Contact/Contact";
import Tutorial from "./Other_Pages/Tutorial/Tutorial";
import Workshop from "./Other_Pages/Workshop/Workshop";
import Login from "./Other_Pages/Login/Login";
import SignUp from "./Other_Pages/Login/SignUp";
import Forget from "./Other_Pages/Login/Forget";

//Import the Workshop pages
import Painting from "./Workshop_Pages/Painting/Painting";
import Landscapes from "./Workshop_Pages/Landscapes/Landscapes";
import Glass from "./Workshop_Pages/Glass_painting/Glass";
import Ceremic from "./Workshop_Pages/Ceremic_work/Ceremic";
import Paper_craft from "./Workshop_Pages/Paper_craft/Paper_craft";
import Mixed_media from "./Workshop_Pages/Mix_media/Mixed_media";
import Abstract from "./Workshop_Pages/Abstract/Abstract";
import Textile from "./Workshop_Pages/Textile/Textile";
import Waste from "./Workshop_Pages/Waste/Waste";
import Sculpture from "./Workshop_Pages/Sculpture/Sculpture";
import Mosaic from "./Workshop_Pages/Mosaic/Mosaic";
import Clay from "./Workshop_Pages/Clay/Clay";


const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Define routes for each page */}
        <Route
          path="/art_class/"
          element={
            <>
              <Hero />
              <Curriculam />
              <Art_area />
              <Pricing />
              <Enroll />
              <Showcase />
              <Art_workshop />
              <Customer />
            </>
          }
        />
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/art_class/about" element={<About />} />
        <Route path="/art_class/classes" element={<Classes />} />
        <Route path="/art_class/contact" element={<Contact />} />
        <Route path="/art_class/login" element={<Login />} />
        <Route path="/art_class/SignUp" element={<SignUp />} />
        <Route path="/art_class/Formenroll" element={<Formenroll />} />
        <Route path="/art_class/Forget" element={<Forget />} />
        <Route path="/art_class/ceremic" element={<Ceremic />} />
        <Route path="/art_class/workshop" element={<Workshop />} />
        <Route path="/art_class/tutorial" element={<Tutorial />} />
        <Route path="/art_class/painting" element={<Painting />} />
        <Route path="/art_class/abstract" element={<Abstract />} />
        <Route path="/art_class/clay" element={<Clay />} />
        <Route path="/art_class/glass" element={<Glass />} />
        <Route path="/art_class/landscapes" element={<Landscapes />} />
        <Route path="/art_class/mixed_media" element={<Mixed_media />} />
        <Route path="/art_class/mosaic" element={<Mosaic />} />
        <Route path="/art_class/paper_craft" element={<Paper_craft />} />
        <Route path="/art_class/sculpture" element={<Sculpture />} />
        <Route path="/art_class/textile" element={<Textile />} />
        <Route path="/art_class/waste" element={<Waste />} />
      </Routes>
    </>
  );
};

export default App;
