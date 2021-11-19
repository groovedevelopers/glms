import React, { useEffect, useState, useRef } from "react";
import "../../../assets/css/clients/header.css";
import { TickerTape } from "react-tradingview-embed";
import Switch from "react-switch";
import { BsBell } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import profile from "../../../assets/images/p.png";
import { GiHamburgerMenu } from "react-icons/gi";
import menu from "../../../assets/images/dashboard/men.png";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaSignal, FaWifi, FaChartArea, FaVideo,  } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";

const Header = () => {
  // <!-- ////////// PRODUCT OF OBSIDIAN INC., WRITTEN AND DESIGNED BY GROOVE DEVELOPERS INC. YOU ARE PROHIBITED FROM USING OR EDITING
  // THIS APPLICATION WITHOUT INFORMING GROOVE DEVELOPERS INC AND OBSIDIAN INC. ///////////-->
  const [checked, setChecked] = useState(false);
  const [slideSidebar, setslideSidebar] = useState(false);
  const slide = () => {
    setslideSidebar(true);
  };

  const effect = useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme !== null) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      const savedTheme = currentTheme === "dark" ? true : false;
      setChecked(savedTheme);
    }
  }, []);

  const handleChange = () => {
    setChecked(!checked);
    if (checked === false) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark"); //add this
    }
    if (checked === true) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light"); //add this
    }
  };

  return (
    <>
      <div className="header">
        <div className="header_center">
          <div className="clearfix"></div>
          <TickerTape
            widgetProps={{
              symbols: [
                {
                  proName: "FX_IDC:EURUSD",
                  title: "EUR/USD",
                },
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "BTC/USD",
                },
                {
                  description: "XAU/USD",
                  proName: "OANDA:XAUUSD",
                },
                {
                  description: "GBP/JPY",
                  proName: "OANDA:GBPJPY",
                },
                {
                  description: "GBP/AUD",
                  proName: "OANDA:GBPAUD",
                },
                {
                  description: "GBP/USD",
                  proName: "OANDA:GBPUSD",
                },
                {
                  description: "AUD/JPY",
                  proName: "OANDA:AUDJPY",
                },
              ],
              showSymbolLogo: true,
              //   "colorTheme": "dark",
              isTransparent: true,
              displayMode: "adaptive",
              locale: "en",
            }}
          />{" "}
        </div>

        <div className="header_right">
          <div className="notify_tab">
            {/* <BsBell className="noti"></BsBell> */}

            <label>
              <Switch
                onColor="#f83a0c"
                onChange={handleChange}
                checked={checked}
              />
            </label>
          </div>
          <div className="notify_tab noti_header">
            <BsBell className="icon"></BsBell>
          </div>

          <div className="notify_tab noti_profile">
            <div className="display_name">
              <img src={profile} /> &nbsp; &nbsp;
              <span>Elsie</span> &nbsp; &nbsp;
              <MdArrowDropDown className="icon"></MdArrowDropDown>
            </div>

            <div className="profile_tab_dropdown">
              <Link to="/profile">
                <div className="profile_tab_menulist"> <TiUserAddOutline></TiUserAddOutline> &nbsp; My Profile</div>
              </Link>
              <a>
                <div className="profile_tab_menulist"><FiLogOut> </FiLogOut> &nbsp;Log out</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile">
        <div className="header_mobile">
          <div className="mobileHead_m">
            {/* <GiHamburgerMenu className="icon"></GiHamburgerMenu> */}

            <div
              className="sub-menu_main"
              onClick={() => {
                setslideSidebar(!slideSidebar);
              }}
            >
              <img src={menu} className="icon" />
            </div>
            <Slide
              className="slideMenu"
              direction="left"
              in={slideSidebar}
              mountOnEnter
              unmountOnExit
              {...(slideSidebar ? { timeout: 300 } : {})}
              style={{ display: `${slideSidebar ? "block" : "none"}` }}
            >
              <div
                className="sub-menu"
                style={{ display: `${slideSidebar ? "block" : "none"}` }}
              >
                <li className="menulist">
                  <Link to="/dashboard">
                    {" "}
                    <RiDashboardLine className="icon"></RiDashboardLine> &nbsp;
                    Dashboard{" "}
                  </Link>
                </li>

                <li className="menulist">
                  <Link to="/course">
                    {" "}
                    <FaWifi className="icon"></FaWifi> &nbsp; Online Course{" "}
                  </Link>
                </li>

                <li className="menulist">
                  <Link to="/chart">
                    {" "}
                    <FaChartArea className="icon"></FaChartArea> &nbsp; Chart{" "}
                  </Link>
                </li>

                <li className="menulist">
                  <Link to="/signals">
                    {" "}
                    <FaSignal className="icon"></FaSignal> &nbsp; Signals{" "}
                  </Link>
                </li>

                <li className="menulist">
                  <Link to="/live">
                    {" "}
                    <CgMediaLive className="icon"></CgMediaLive> &nbsp; Live
                    Course{" "}
                  </Link>
                </li>

                <li className="menulist">
                  <Link to="/videos">
                    {" "}
                    <FaVideo className="icon"></FaVideo> &nbsp; Videos{" "}
                  </Link>
                </li>

                <li className="menulist">
                  <Link to="/technicals">
                    {" "}
                    <FiSettings className="icon"></FiSettings> &nbsp; Technicals{" "}
                  </Link>
                </li>

                <li className="menulist">
                  <Link to="/techart">
                    {" "}
                    <FiSettings className="icon"></FiSettings> &nbsp; Technical
                    Articles{" "}
                  </Link>
                </li>

                <li className="menulist">
                  <Link to="/risk"> &nbsp; Risk Management </Link>
                </li>

                <li className="menulist">
                  <Link to="/support">
                    {" "}
                    <BiSupport className="icon"></BiSupport> &nbsp; Support{" "}
                  </Link>
                </li>
              </div>
            </Slide>
          </div>

          <div className="mobileHead_l">
            <div className="logo"></div>
          </div>

          <div className="mobileHead_n">
            <div className="notify_tab ">
              <BsBell className="icon"></BsBell>
            </div>
          </div>

          <div className="mobileHead_p">
            <div className="h_profile">
              {" "}
              <img src={profile} />{" "}
            </div>
          </div>
        </div>

        <TickerTape
          widgetProps={{
            symbols: [
              {
                proName: "FX_IDC:EURUSD",
                title: "EUR/USD",
              },
              {
                proName: "BITSTAMP:BTCUSD",
                title: "BTC/USD",
              },
              {
                description: "XAU/USD",
                proName: "OANDA:XAUUSD",
              },
              {
                description: "GBP/JPY",
                proName: "OANDA:GBPJPY",
              },
              {
                description: "GBP/AUD",
                proName: "OANDA:GBPAUD",
              },
              {
                description: "GBP/USD",
                proName: "OANDA:GBPUSD",
              },
              {
                description: "AUD/JPY",
                proName: "OANDA:AUDJPY",
              },
            ],
            showSymbolLogo: true,
            //   "colorTheme": "dark",
            isTransparent: true,
            displayMode: "adaptive",
            locale: "en",
          }}
        />
      </div>
    </>
  );
};

export default Header;
