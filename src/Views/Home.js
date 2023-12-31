import React from 'react'
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';
import Logobrands from '../components/Logobrands';
import Box from '../components/Box';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsAndCases from '../components/ProjectsAndCases';
import MeetOurTeam from '../components/MeetOurTeam';
import ReviewsSection from '../components/ReviewsSection';
import ArticleSection from '../components/ArticleSection';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
    <Header/>
    <ShowCase/>
    <Logobrands/>
    <Box/>
    <About/>
    <Services/>
    <WhyChooseUs/>
    <ProjectsAndCases/>
    <MeetOurTeam/>
    <ReviewsSection/>
    <ArticleSection/>
    <NewsLetter/>
    <Footer/>
</div>
  )
}

export default Home