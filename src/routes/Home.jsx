import React from 'react'
import AboutUs from '../components/aboutUs/AboutUs'
import Hero from '../components/hero/Hero'
import Ourcore from '../components/ourcore/Ourcore'
import ProgAndEvents from '../components/progAndEvents/ProgAndEvents'
import Pv from '../components/pv/Pv'
import Partners from '../components/partners/Partners'
import Schprog from '../components/schprog/Schprog'
import RecentFeeds from '../components/recentFeeds/RecentFeeds'
import DontMiss from '../components/dontMiss/DontMiss'
import Testimonials from '../components/testimonials/Testimonials'
import Footer from '../components/footer/Footer'
import HeroUpdate from '../components/heroUpdate/HeroUpdate'

function Home() {
  return (
    <>
    <HeroUpdate/>
    <Ourcore/>
    <AboutUs/>
    <Pv/>
    <ProgAndEvents/>
    <Partners/>
    <Schprog/>
    <RecentFeeds/>
    <DontMiss/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
//<Hero/>
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
export default Home