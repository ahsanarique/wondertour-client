import React from "react";
import Header from "../Header/Header";
import Footer from "../../Shared/Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";
import FeaturedService from "../FeaturedService/FeaturedService";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <section className="d-flex flex-column align-items-center">
      <Header />
      <Services />
      <FeaturedService />
      <Reviews />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Home;
