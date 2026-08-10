import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrowseCategories from "./components/BrowseCategories/BrowseCategories";
import Products from "./pages/Products";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Brands from "./components/Brands/Brands";
import Testimonials from "./components/Testimonials/Testimonials";
import Statistics from "./components/Statistics/Statistics";
import CallToAction from "./components/CallToAction/CallToAction";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />

      <BrowseCategories />
      <Products />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <Statistics />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}

export default App;