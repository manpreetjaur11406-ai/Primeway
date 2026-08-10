import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Brands from "./components/Brands/Brands";
import Statistics from "./components/Statistics/Statistics";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction/CallToAction";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* NAVBAR */}
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

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

      {/* ENQUIRY */}
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

export default App;