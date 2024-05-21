import React from "react";
import bootstrap from "bootstrap";
import Slider from "@/src/components/home/slider";
import Navbar from "@/src/components/navbar/navbar";
import Pricing from "@/src/components/pricing/pricing";
import Customers from "@/src/components/cutomers/customers";
import FAQ from "@/src/components/faq/faq";
import Aboutus from "@/src/components/aboutus/aboutus";
import Contactus from "@/src/components/contactus/contactus";
import Categories from "@/src/components/category/category";
import {
  briyaniArray,
  icecreamArray,
  juiceArray,
  pastryArray,
  vegArray,
} from "@/src/components/category/categorydata";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-white">
      <Slider />
      {/* Non veg */}
      <Categories
        title="Indian Delicacies"
        categoryArray={briyaniArray}
        key={"Category1"}
      />
      {/* Veg */}
      <Categories
        title="Curries & Creations"
        categoryArray={vegArray}
        key={"Category2"}
      />
      {/* Falooda */}
      <Categories
        title="Liquid Sunshine"
        categoryArray={juiceArray}
        key={"Category3"}
      />
      {/* Juices */}
      <Categories
        title="The Ultimate Icy Indulgence"
        categoryArray={icecreamArray}
        key={"Category4"}
      />
      {/* Pastry */}
      <Categories
        title="A World of Sweet Endings"
        categoryArray={pastryArray}
        key={"Category4"}
      />
      <FAQ />
      <Contactus />
    </div>
  );
};

export default Home;
