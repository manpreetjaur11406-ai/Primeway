import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceFeatures from "./components/ServiceFeatures";

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


/* =====================================================
   HOME PAGE
===================================================== */

function Home() {
  return (
    <>
      {/* =========================
          HEADER
      ========================= */}
      <Header />


      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar />


      {/* =========================
          HERO
      ========================= */}
      <section id="home">
        <Hero />
      </section>


      {/* =========================
          SERVICE FEATURES
      ========================= */}
      <ServiceFeatures />


      {/* =========================
          FEATURED PRODUCTS
      ========================= */}
      <section id="products">
        <FeaturedProducts />
      </section>


      {/* =========================
          BRANDS
      ========================= */}
      <section id="brands">
        <Brands />
      </section>


      {/* =========================
          WHY CHOOSE US
      ========================= */}
      <section id="about">
        <WhyChooseUs />
      </section>


      {/* =========================
          STATISTICS
      ========================= */}
      <Statistics />


      {/* =========================
          TESTIMONIALS
      ========================= */}
      <Testimonials />


      {/* =========================
          ENQUIRY / CALL TO ACTION
      ========================= */}
      <CallToAction />


      {/* =========================
          CONTACT
      ========================= */}
      <section id="contact">
        <Contact />
      </section>


      {/* =========================
          FOOTER
      ========================= */}
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

      {/* =========================
          HOME PAGE
      ========================= */}
      <Route
        path="/"
        element={<Home />}
      />


      {/* =========================
          PRODUCTS PAGE
      ========================= */}
      <Route
        path="/products"
        element={<Products />}
      />


      {/* =========================
          LOGIN / SIGNUP PAGE
      ========================= */}
      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>
  );
}


export default App;