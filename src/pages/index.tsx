import * as React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Welcome from "../components/Welcome";
import "../styles/Home.scss";

const Home: React.FC = () => (
  <Layout>
    <Navbar />
    <Welcome />
    <About />
    <h2 id="projects" className="section-title">
      Projects
    </h2>
    <Projects />
    <h2 id="contact" className="section-title">
      Contact
    </h2>
    <Contact />
    <Footer />
  </Layout>
);

export default Home;
