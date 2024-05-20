import React from "react";
import bootstrap from "bootstrap";
import Slider from "@/src/components/home/slider";
import Navbar from "@/src/components/navbar/navbar";
import Pricing from "@/src/components/pricing/pricing";
import Rating from "@/src/components/rating/rating";
import Customers from "@/src/components/cutomers/customers";
import FAQ from "@/src/components/faq/faq";
import Aboutus from "@/src/components/aboutus/aboutus";
import Contactus from "@/src/components/contactus/contactus";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-white">
      {/* <Navbar /> */}
      <Slider />
      <Pricing />
      <Rating />
      <Customers />
      <Aboutus />
      <FAQ />
      <Contactus />
    </div>
  );
};

export default Home;
