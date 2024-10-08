import React, { useContext, useState } from "react";
import Fetch from "./Fetch";
import img1 from "../../imgs/plus.png";
import img2 from "../../imgs/starts.png";
import img3 from "../../imgs/dollar.png";
import { CartContext } from "../context/Context";

function Home() {
  const { data } = Fetch("http://localhost:8000/item");
  const { cards } = Fetch("http://localhost:8000/cards");
  const { foods } = Fetch("http://localhost:8000/foods");
  const globalState = useContext(CartContext);
  const dispatch = globalState.dispatch;

  // Search term state
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered cards and foods based on the search term
  const filteredCards = cards?.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredFoods = foods?.filter((food) =>
    food.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle button click
  const handleButtonClick = (title) => {
    setSearchTerm(title);
  };

  return (
    <div className="home">
      <div className="home-row1">
        <h2 className="home-title">Hello, Patricia</h2>
        <input
          type="text"
          placeholder="What do you want to eat today..."
          className="home-inp"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      {/* Show suggested items based on search term */}
      {searchTerm && (
        <div className="suggested-items">
          {filteredCards.map((card) => (
            <span
              key={card.id}
              className="suggested-item"
              onClick={() => handleButtonClick(card.title)}
            >
              {card.title}
            </span>
          ))}
          {filteredFoods.map((food) => (
            <span
              key={food.id}
              className="suggested-item"
              onClick={() => handleButtonClick(food.title)}
            >
              {food.title}
            </span>
          ))}
        </div>
      )}

      {/* Discount Voucher and Category Sections remain visible */}
      {!searchTerm && (
        <>
          <div className="home-row2">
            <div className="home-bg">
              <h2 className="home-title2">Get Discount Voucher Up To 20%</h2>
              <p className="home-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="home-row">
            <h2 className="home-titles">Category</h2>
            <button className="home-btns">
              View all
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </>
      )}

      <div className="home-row3">
        {data &&
          data.map((e) => (
            <div className="home-row3-card" key={e.id}>
              <img src={e.img} alt="" className="home3-img" />
              <h3 className="home3-title">{e.title}</h3>
            </div>
          ))}
      </div>

      {/* Popular Dishes Section */}
      <div className="home-row">
        <h2 className="home-titles">Popular Dishes</h2>
        <button className="home-btns">
          View all
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
      <div className="home-row4">
        {filteredCards &&
          filteredCards.map((a) => {
            a.quantity = 1;
            return (
              <div className="home4-card" key={a.id}>
                <img src={a.img} alt={a.title} className="home4-img" />
                <img src={img2} alt="Star" className="home4-star" />
                <div className="home4-row">
                  <div className="home4-texts">
                    <h4 className="home4-title">{a.title}</h4>
                    <h2 className="home4-price">
                      <img src={img3} alt="" />
                      {a.price}
                    </h2>
                  </div>
                  <button
                    className="click-btn"
                    onClick={() => dispatch({ type: "ADD", payload: a })}
                  >
                    <img src={img1} alt="Add Icon" className="home4-starI" />
                  </button>
                </div>
                <img src={a.heart} className="heart" alt="" />
              </div>
            );
          })}
      </div>

      {/* Recent Orders Section */}
      <div className="home-row">
        <h2 className="home-titles">Recent Order</h2>
        <button className="home-btns">
          View all
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
      <div className="home-row4">
        {filteredFoods &&
          filteredFoods.map((b) => {
            b.quantity = 1;
            return (
              <div className="home4-card" key={b.id}>
                <img src={b.img} alt={b.title} className="home4-img" />
                <img src={img2} alt="Star" className="home4-star" />
                <div className="home4-row">
                  <div className="home4-texts">
                    <h4 className="home4-title">{b.title}</h4>
                    <h2 className="home4-price">
                      <img src={img3} alt="" />
                      {b.price}
                    </h2>
                  </div>
                  <button
                    className="click-btn"
                    onClick={() => dispatch({ type: "ADD", payload: b })}
                  >
                    <img src={img1} alt="Add Icon" className="home4-starI" />
                  </button>
                </div>
                <img src={b.heart} className="heart" alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
