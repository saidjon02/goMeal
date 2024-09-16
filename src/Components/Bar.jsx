import React from "react";
import bImg from "../../imgs/chat 1.png";
import bImg2 from "../../imgs/chat 2.png";
import bImg3 from "../../imgs/chat 3.png";
import img1 from "../../imgs/placeholder.png";
import img2 from "../../imgs/card.png";
import img3 from "../../imgs/Location.png";
import img4 from "../../imgs/dollar.png";
import imgs1 from "../../imgs/p1.png";
import imgs2 from "../../imgs/image (18).png";
import imgs3 from "../../imgs/p2.png";
function Bar() {
  return (
    <div className="bar">
      <div className="bar-row1">
        <div className="bar1-left">
          <img src={bImg} alt="" className="bar-img" />
          <img src={bImg2} alt="" className="bar-img" />
          <img src={bImg3} alt="" className="bar-img" />
        </div>
        <img src={img1} alt="" />
      </div>
      <h2 className="bar-title">Your Balance</h2>
      <img src={img2} alt="" />
      <div className="address">
        <h2 className="bar-title2">Your Address</h2>
        <div className="bar-row2">
          <p className="bar2-text">
            <img src={img3} alt="" />
            Elm Street, 23
          </p>
          <button className="bar2-btn">Change</button>
        </div>
        <p className="bar2-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.{" "}
        </p>
        <div className="btn-row">
          <button className="bar2-btn">Add Details</button>
          <button className="bar2-btn">Add Note</button>
        </div>
      </div>
      <div className="menu">
        <h2 className="menu-title"></h2>
        <div className="menu-row">
          <div className="menu-row2">
            <div className="menu-left">
              <div className="menu-row3">
                <img src={imgs1} alt="" />
                <div className="menu-box">
                  <h2 className="menu-title2">Pepperoni Pizza</h2>
                  <p className="xl">xl</p>
                </div>
              </div>
            </div>
            <div className="menu-right">
              <h2 className="home4-price">
                <img src={img4} alt="" />
                5.59
              </h2>
            </div>
          </div>
        </div>
        <div className="menu-row">
          <div className="menu-row2">
            <div className="menu-left">
              <div className="menu-row3">
                <img src={imgs2} alt="" />
                <div className="menu-box">
                  <h2 className="menu-title2">Cheese Burger</h2>
                  <p className="xl">xl</p>
                </div>
              </div>
            </div>
            <div className="menu-right">
              <h2 className="home4-price">
                <img src={img4} alt="" />
                5.59
              </h2>
            </div>
          </div>
        </div>
        <div className="menu-row">
          <div className="menu-row2">
            <div className="menu-left">
              <div className="menu-row3">
                <img src={imgs3} alt="" />
                <div className="menu-box">
                  <h2 className="menu-title2">Vegan Pizza</h2>
                  <p className="xl">xl</p>
                </div>
              </div>
            </div>
            <div className="menu-right">
              <h2 className="home4-price">
                <img src={img4} alt="" />
                5.59
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="sevice">
        <div className="s-row"></div>
        <div className="s-row"></div>
      </div>
    </div>
  );
}

export default Bar;
