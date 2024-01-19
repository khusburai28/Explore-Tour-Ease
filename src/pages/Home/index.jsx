import React from "react";
import AboutHome from "../../components/AboutHome";
import Carousel from "../../components/Carousel";
import Catogery from "../../components/Catogery";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopularSearch from "../../components/PopularSearch";
import SearchFilter from "../../components/SearchFilter";
import TopDestination from "../../components/TopDestination";

const index = () => {
  const images = [
    {
      image: "./1-banner.png",
      text: "Lotus temple",
    },
    {
      image: "./2-banner.png",
      text: "Taj mahal",
    },
    {
      image: "./3-banner.png",
      text: "gateway of india",
    },

    // Add more image URLs here
  ];
  return (
    <>
      <Header />
      <Carousel slides={images} />
      <SearchFilter />
      <PopularSearch />
      <Catogery />
      <AboutHome />
      <TopDestination />
      <Footer />
    </>
  );
};

export default index;
