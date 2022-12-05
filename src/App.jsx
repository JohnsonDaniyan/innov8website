import React,{lazy, Suspense,  useState, useEffect } from 'react'
import LandingAnim from "./components/landingAnim/LandingAnim";
import { ParallaxProvider } from 'react-scroll-parallax';
import NavBar from "./components/nav/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Innov8LearnCourses from './routes/Innov8LearnCourses';
import { useQuery, gql } from '@apollo/client';

const cors = require("cors");

const Innov8Learn = lazy(()=> import("./routes/Innov8Learn"))


const App = () => {
  return <Router>
    <ParallaxProvider>
    <LandingAnim/> 
    <NavBar/>
          <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/innov8Learn" element={<Innov8Learn/>}></Route>
            <Route path="/innov8Learn/:id" element={<Innov8LearnCourses/>}></Route>
          </Routes>
          </Suspense>
          </ParallaxProvider>
        </Router>
  // <ParallaxProvider>
  //   <LandingAnim/>
  //   <NavBar/>
  //   <Hero/>
  //   <Ourcore/>
  //   <AboutUs/>
  //   <Pv/>
  //   <ProgAndEvents/>
  //   <Partners/>
  //   <Schprog/>
  //   <RecentFeeds/>
  //   <DontMiss/>
  //   <Testimonials/>
  //   <Footer/>
  // </ParallaxProvider>
  // ;
};

export default App;