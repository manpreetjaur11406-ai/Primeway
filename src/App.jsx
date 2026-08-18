import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceFeatures from "./components/ServiceFeatures";
import Welcome from "./components/Welcome/Welcome";

import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Brands from "./components/Brands/Brands";
import Statistics from "./components/Statistics/Statistics";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction/CallToAction";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer";

import Login from "./pages/Login";
import Products from "./pages/Products";
import About from "./pages/About";
import Blog from "./pages/Blog";


/* =====================================================
   HOME PAGE
===================================================== */

function Home() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* SERVICE FEATURES */}
      <ServiceFeatures />

      {/* WELCOME */}
      <Welcome />

      {/* FEATURED PRODUCTS */}
      <section id="products">
        <FeaturedProducts />
      </section>

      {/* BRANDS */}
      <section id="brands">
        <Brands />
      </section>

      {/* WHY CHOOSE US */}
      <section id="about">
        <WhyChooseUs />
      </section>

      {/* STATISTICS */}
      <Statistics />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CALL TO ACTION */}
      <CallToAction />

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}


/* =====================================================
   ABOUT PAGE
===================================================== */

function AboutPage() {
  return (
    <>
      <Header />
      <Navbar />

      <About />

      <Footer />
    </>
  );
}


/* =====================================================
   BLOG PAGE
===================================================== */

function BlogPage() {
  return (
    <>
      <Header />
      <Navbar />

      <Blog />

      <Footer />
    </>
  );
}


/* =====================================================
   CONTACT PAGE
===================================================== */

function ContactPage() {
  return (
    <>
      <Header />
      <Navbar />

      <Contact />

      <Footer />
    </>
  );
}


/* =====================================================
   MAIN APP / ROUTES
===================================================== */

function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* PRODUCTS */}
      <Route
        path="/products"
        element={<Products />}
      />

      {/* ABOUT US */}
      <Route
        path="/about"
        element={<AboutPage />}
      />

      {/* BLOG */}
      <Route
        path="/blog"
        element={<BlogPage />}
      />

      {/* CONTACT US */}
      <Route
        path="/contact"
        element={<ContactPage />}
      />

      {/* LOGIN */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* ANY UNKNOWN URL → HOME */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}


export default App;