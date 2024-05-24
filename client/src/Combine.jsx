import React, { lazy, Suspense } from "react";
import Loader from "./components//Loader";
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const Combine = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default Combine;
