import React from "react";
import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Packages></Packages>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
