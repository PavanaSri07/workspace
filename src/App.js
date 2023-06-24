import "./styles.css";
import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import Industries from "./Routes/Industries";
//import Footer from "./Components/Footer";
import NewC from "./Trails/NewC";
import NewC2 from "./Trails/NewC2";
import Service1 from "./Routes/Service1";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Service />} />
        <Route path="/NewC" element={<NewC />} />
        <Route path="/NewC2" element={<NewC2 />} />
        <Route path="/Service1" element={<Service1 />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
  
}
