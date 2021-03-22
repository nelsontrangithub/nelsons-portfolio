import * as React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

const Home: React.FC = () => (
  <Layout>
    <Navbar />
    <Welcome />
    <About />
  </Layout>
);

export default Home;
