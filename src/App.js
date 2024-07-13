import "./App.css";
import { Helmet } from "react-helmet";

import Nav from "./components/Nav/Nav";
import HeroSection from "./components/HeroSection/HeroSection";
import SpecialDishes from "./components/SpecialDishes/SpecialDishes";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Little Lemon</title>
        <meta
          name="description"
          content="Litte lemon is a restaurant that offers a variety of dishes including vegan and vegetarian options."
        />
        <meta name="og:image" content="images/greek salad.jpg" />
        <meta
          name="og:description"
          content="itte lemon is a restaurant that offers a variety of dishes including vegan and vegetarian options."
        />
        <meta name="og:title" content="Little Lemon" />
      </Helmet>
      <Nav></Nav>
      <HeroSection></HeroSection>
      <SpecialDishes></SpecialDishes>
      <Testimonials></Testimonials>
      <AboutSection></AboutSection>
      <Footer> </Footer>
    </>
  );
}

export default App;
