import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import BrowseCategories from "./components/BrowseCategories/BrowseCategories";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Brands from "./components/Brands/Brands";
import Testimonials from "./components/Testimonials/Testimonials";
import Statistics from "./components/Statistics/Statistics";
import CallToAction from "./components/CallToAction/CallToAction";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

import Products from "./pages/Products";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";


function Home() {
  return (
    <>
      <Hero />
      <BrowseCategories />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <Statistics />
      <CallToAction />
      <Contact />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Header />
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Products Page */}
        <Route path="/products" element={<Products />} />

        {/* Categories Page */}
        <Route path="/categories" element={<Categories />} />

        {/* Brands Page */}
        <Route path="/brands" element={<Brands />} />

        {/* About Us Page */}
        <Route path="/about" element={<About />} />

        {/* Blog Page */}
        <Route path="/blog" element={<Blog />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;