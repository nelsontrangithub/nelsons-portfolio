import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

const Home: React.FC = () => (
  <Layout>
    <Navbar />
    <Welcome />
    {/* <SEO title="Home" /> */}
    {/* <StaticImage
      src="../images/avatar.png"
      width={300}
      quality={100}
      alt="Nelson Tran"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </Layout>
);

export default Home;
