import "./App.css";

import Nav from "./components/Nav/Nav";
import HeroSection from "./components/HeroSection/HeroSection";
import SpecialDishes from "./components/SpecialDishes/SpecialDishes";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
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
