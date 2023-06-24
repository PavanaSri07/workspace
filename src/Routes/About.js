import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import C1A from "../Components/C1A";
import C2A from "../Components/C2A";
import Card3 from "../Components/Card3";
import Footer from "../Components/Footer";
import CompanyWebsite from  "../Trails/F61";
import ScrollingA from "../Components/ScrollingComponentA";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="https://st2.depositphotos.com/1051392/8073/i/600/depositphotos_80739810-stock-photo-3d-pen-writing-about-us.jpg"
        title="Introducing Gamayas - Empowering Your Business with Innovative Digital Solutions!"
        text="Gamayas: Your Digital Transformation Experts Virginia-based Gamayas is a trusted web design and development company. We deliver effective digital marketing, eCommerce solutions, CMS development, SEO and PPC services, CRO optimization, and mobile app development. Partner with us to transform your ideas into impactful digital experiences."
      />
      <C1A />
      <C2A />
      <Card3 />
      <ScrollingA/>
      {/* <C3
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXR0cmFjdCUyMHNpdGUlMjB2aXNpdG9yc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        heading="Attract Site Visitors"
        text="Modern Trending Websit    Creative Latest Graphics
        Fresh Multimedia Elements
        Engaging Content Copy"
      /> */}

      
      {/* <CompanyWebsite/>  */}
      <Footer />
    </>
  );
}
export default About;
