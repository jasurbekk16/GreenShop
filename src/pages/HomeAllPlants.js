import React from "react";
import rasm from "../assets/cardImg.png";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const HomeAllPlants = () => {
  const data = [
    { id: 1, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
    { id: 2, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
    { id: 3, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
    { id: 4, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
    { id: 5, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
    { id: 6, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
    { id: 7, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
    { id: 8, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
    { id: 9, img: rasm, name: "Barberton Daisy", price: 119, count: 1 },
  ];
  return (
    <div className="allWrapper">
    <div className="allPlantsDiv">
      {data.map((item, index) => (
        <div className="allPlantsCard">
          <div className="imgDiv">
            <img src={item.img} alt="" />
            <div className="iconsDiv">
              <button><RiShoppingCartLine /></button>
              <button><IoMdHeartEmpty /></button>
              <button><IoSearch /></button>
            </div>
          </div>
          <p>{item.name}</p>
          <b>${item.price}.00</b>
        </div>
      ))}
    </div>
    </div>

  );
};

export default HomeAllPlants;
