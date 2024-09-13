import React from "react";
import logo from "../../imgs/logo.png";
import nav7 from "../../imgs/nav (7).png";
import nav6 from "../../imgs/nav (6).png";
import nav1 from "../../imgs/nav (1).png";
import nav2 from "../../imgs/nav (2).png";
import nav3 from "../../imgs/nav (3).png";
import nav4 from "../../imgs/nav (4).png";
import nav5 from "../../imgs/nav (5).png";
import { NavLink } from "react-router-dom";
function Aside() {
  return (
    <div className="aside">
      <img src={logo} className="logo" alt="" />
      <div className="links">
        <ul>
          <li className="aside-li">
            <NavLink to={"/"} className="aside-links">
              <img src={nav7} alt="" className="aside-img" />
              Dashboard
            </NavLink>
            <NavLink to={"not"} className="aside-links">
              <img src={nav6} alt="" className="aside-img" />
              Food Order
            </NavLink>
            <NavLink to={"not"} className="aside-links">
              <img src={nav5} alt="" className="aside-img" />
              Favorite
            </NavLink>
            <NavLink to={"not"} className="aside-links">
              <img src={nav4} alt="" className="aside-img" />
              Message
            </NavLink>
            <NavLink to={"not"} className="aside-links">
              <img src={nav3} alt="" className="aside-img" />
              Order History
            </NavLink>
            <NavLink to={"not"} className="aside-links">
              <img src={nav2} alt="" className="aside-img" />
              Bills
            </NavLink>
            <NavLink to={"not"} className="aside-links">
              <img src={nav1} alt="" className="aside-img" />
              Setting
            </NavLink>
          </li>
        </ul>
        <div className="aside-card">
          <h2 className="a-title">Upgrade your Account to Get Free Voucher</h2>
          <button className="a-btn">Upgrade</button>
        </div>
      </div>
    </div>
  );
}

export default Aside;
