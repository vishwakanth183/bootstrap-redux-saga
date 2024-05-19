import React from "react";
import bootstrap from "bootstrap"
import Slider from "@/src/home/slider";
import Navbar from "@/src/navbar/navbar";
import Pricing from "@/src/pricing/pricing";
import Rating from "@/src/rating/rating";
import Customers from "@/src/cutomers/customers";
import FAQ from "@/src/faq/faq";
import Aboutus from "@/src/aboutus/aboutus";
import Contactus from "@/src/contactus/contactus";



const Home = () => {


    return (
        <div style={{ minHeight: "100vh" }} className="bg-white">
            <Navbar />
            <Slider />
            <Pricing />
            <Rating />
            <Customers />
            <Aboutus />
            <FAQ />
            <Contactus />
        </div>
    )
}

export default Home