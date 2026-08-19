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
import BlogArticle from "./pages/BlogArticle";

/* =====================================================
   FULL CONTACT PAGE
   ===================================================== */

import ContactUs from "./pages/ContactUs";


/* =====================================================
   HOME PAGE
   ===================================================== */

function Home() {
  return (
    <>
      <Header />

      <Navbar />


      {/* =========================
          HERO
      ========================= */}

      <section id="home">
        <Hero />
      </section>


      {/* =========================
          FEATURED PRODUCTS
      ========================= */}

      <section id="products">
        <FeaturedProducts />
      </section>


      {/* =========================
          WELCOME
      ========================= */}

      <Welcome />


      {/* =========================
          SERVICE FEATURES
      ========================= */}

      <ServiceFeatures />


      {/* =========================
          BRANDS
      ========================= */}

      <section id="brands">
        <Brands />
      </section>


      {/* =========================
          ABOUT / WHY CHOOSE US
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
          CALL TO ACTION
      ========================= */}

      <CallToAction />


      {/* =================================================
          HOME CONTACT SECTION

          IMPORTANT:
          This is ONLY the short contact section:
          - Contact Us
          - Address
          - Phone
          - Email
          - Working Hours
          - Contact Form

          The detailed Contact Us page is separate.
      ================================================= */}

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
   PRODUCTS PAGE
   ===================================================== */

function ProductsPage() {
  return (
    <>
      <Header />

      <Navbar />

      <Products />

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
   SINGLE BLOG ARTICLE PAGE
   ===================================================== */

function BlogArticlePage() {
  return (
    <>
      <Header />

      <Navbar />

      <BlogArticle />

      <Footer />
    </>
  );
}


/* =====================================================
   FULL CONTACT US PAGE
   ===================================================== */

function ContactPage() {
  return (
    <>
      <Header />

      <Navbar />

      {/* 
        IMPORTANT:
        Do NOT use <Contact /> here.

        <Contact /> is the short contact section
        used on the Home page.

        <ContactUs /> is the complete detailed
        Contact Us page.
      */}

      <ContactUs />

      <Footer />
    </>
  );
}


/* =====================================================
   MAIN APP
   ===================================================== */

function App() {
  return (
    <Routes>

      {/* =========================
          HOME
      ========================= */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* =========================
          PRODUCTS
      ========================= */}

      <Route
        path="/products"
        element={<ProductsPage />}
      />


      {/* =========================
          ABOUT
      ========================= */}

      <Route
        path="/about"
        element={<AboutPage />}
      />


      {/* =========================
          BLOG
      ========================= */}

      <Route
        path="/blog"
        element={<BlogPage />}
      />


      {/* =========================
          BLOG ARTICLE
      ========================= */}

      <Route
        path="/blog/:slug"
        element={<BlogArticlePage />}
      />


      {/* =========================
          FULL CONTACT US PAGE
      ========================= */}

      <Route
        path="/contact"
        element={<ContactPage />}
      />


      {/* =========================
          LOGIN
      ========================= */}

      <Route
        path="/login"
        element={<Login />}
      />


      {/* =========================
          INVALID URL
      ========================= */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}


export default App;