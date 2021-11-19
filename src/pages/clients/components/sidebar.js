import React, { useEffect, useState } from "react";
import "../../../assets/css/clients/sidebar.css";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {
  FaBitcoin,
  FaNewspaper,
  FaSignal,
  FaSignOutAlt,
  FaWifi,
  FaChartArea,
  FaVideo,
} from "react-icons/fa";
import {
  FaTelegram,
  FaInstagram,
  FaShoppingCart,
  FaTwitter,
  FaUserAlt,
  FaYoutube,
} from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
// import {SiManageic} from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GrUpgrade } from "react-icons/gr";
import { RiDashboardLine } from "react-icons/ri";

const Sidebar = () => {
  // <!-- ////////// PRODUCT OF OBSIDIAN INC., WRITTEN AND DESIGNED BY GROOVE DEVELOPERS INC. YOU ARE PROHIBITED FROM USING OR EDITING
  // THIS APPLICATION WITHOUT INFORMING GROOVE DEVELOPERS INC AND OBSIDIAN INC. ///////////-->


  return (
    <div className="sidebar">
        <div className="menu_icon">
            <GiHamburgerMenu className="menu_icon"></GiHamburgerMenu>
        </div>
      <Link to="/home">
        <div className="side_logo"></div>
      </Link>

      <div className="side_menu">
        <li className="menulist">
          <Link to="/dashboard">
            {" "}
            <RiDashboardLine className="icon"></RiDashboardLine> &nbsp;
            Dashboard{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/online">
            {" "}
            <FaWifi className="icon"></FaWifi> &nbsp;
            Online Course{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/dashboard">
            {" "}
            <FaChartArea className="icon"></FaChartArea> &nbsp;
            Chart{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/dashboard">
            {" "}
            <FaSignal className="icon"></FaSignal> &nbsp;
            Signals{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/dashboard">
            {" "}
            <CgMediaLive className="icon"></CgMediaLive> &nbsp;
            Live Course{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/dashboard">
            {" "}
            <FaVideo className="icon"></FaVideo> &nbsp;
            Videos{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/dashboard">
            {" "}
            <FiSettings className="icon"></FiSettings> &nbsp;
            Technicals{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/dashboard">
            {" "}
            <FiSettings className="icon"></FiSettings> &nbsp;
            Technical Articles{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/dashboard">
            {" "}
             &nbsp;
            Risk Management{" "}
          </Link>
        </li>

        <li className="menulist">
          <Link to="/dashboard">
            {" "}
            <BiSupport className="icon"></BiSupport> &nbsp;
            Support{" "}
          </Link>
        </li>
        </div>

      
    </div>
  );
};

export default Sidebar;
