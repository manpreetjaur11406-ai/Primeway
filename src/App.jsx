import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <Categories />

      <section id="products">
        <FeaturedProducts />
      </section>

      {/* Brands section */}
      <section id="brands" className="page-section">
        <h2>Our Brands</h2>
        <p>Explore our trusted truck spare parts brands.</p>
      </section>

      {/* About Us section */}
      <section id="about" className="page-section">
        <h2>About Us</h2>
        <p>
          PrimeWay provides quality truck spare parts and accessories.
        </p>
      </section>

      {/* Blog section */}
      <section id="blog" className="page-section">
        <h2>Latest Blogs</h2>
        <p>Read our latest truck spare parts articles and updates.</p>
      </section>

      {/* Contact section */}
      <section id="contact" className="page-section">
        <h2>Contact Us</h2>
        <p>Get in touch with our team for enquiries.</p>
      </section>

      <Footer />
    </>
  );
}

export default App;