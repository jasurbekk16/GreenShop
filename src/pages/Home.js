import React from "react";
import kichikRasm from "../assets/section1S.png";
import kattaRasm from "../assets/section1B.png";
import { Routes, Route, Link } from "react-router-dom";
import HomeAllPlants from "./HomeAllPlants";
const Home = () => {
  return (
    <div className="homeWrapper">
      {/* section 1 start */}
      <div className="section1">
        <p>WELCOME TO GREENSHOP</p>
        <b>
          LET'S MAKE A BETTER <s>PLANET</s>
        </b>
        <span>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </span>
        <button>SHOP NOW</button>
        <img src={kichikRasm} className="kichikRasm" alt="" />
        <img src={kattaRasm} className="kattaRasm" alt="" />
      </div>

      {/* section 1 end */}

      {/* section2 start */}
<div className="section2">
  <div className="homeNav">
    <div className="linksHome">
    <Link to={''}>All Plants</Link>
    <Link to={''}>New Arrivals</Link>
    <Link to={''}>Sale</Link>
    </div>
    <div className="selectHome">
      <p>Sort by:</p>
       <select name="" id="">
        <option value="">Default sorting</option>
        <option value="">Default sorting</option>
        <option value="">Default sorting</option>
        </select>
    </div>
  </div>
  <HomeAllPlants />
      
</div>
      {/* section2 end */}
    </div>
  );
};

export default Home;
