import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactForm from "../Components/Contactform";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-contact"
        heroImg="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        title="Partner with Us to Fuel Your Growth!"
        text="Whether you're ready to elevate your digital presence or seeking comprehensive
       insights into web design, eCommerce, and digital marketing solutions,
        simply provide us with your 
       information, and we'll promptly connect with you to discuss your needs in detail. "
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
