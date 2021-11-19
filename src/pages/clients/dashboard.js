import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "../../assets/css/clients/style.css";
import { Link } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import noti from "../../assets/images/dashboard/notii.png";
import "elix/define/SlidingPages";

import A from "./components/clock/A";
import E from "./components/clock/E";
import C from "./components/clock/C";
import D from "./components/clock/D";
import styled from "styled-components";
import { EconomicCalendar } from "react-tradingview-embed";
import Alert from "react-bootstrap/Alert";


// import { useAlert } from "react-alert";

const Dashboard = () => {
  // <!-- ////////// PRODUCT OF OBSIDIAN INC., WRITTEN AND DESIGNED BY GROOVE DEVELOPERS INC. YOU ARE PROHIBITED FROM USING OR EDITING
  // THIS APPLICATION WITHOUT INFORMING GROOVE DEVELOPERS INC AND OBSIDIAN INC. ///////////-->


  const ClockWrapper = styled.div`
    object-fit: contain;
    width: 100%;
    padding-left: 7px;

    h3 {
      margin: 2rem 0 0;
      font-family: Raleway;
      font-size: 1.25rem;
      font-weight: 300;
    }

    @media (max-width: 700px) {
      width: 100%;
      padding: 4rem 0;
    }
  `;

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="2" className="sidebar-col">
            <Sidebar></Sidebar>
          </Col>
          <Col sm="12" md="10" className="mainbody">
            <Header></Header>

            <div className="wb_text">
              <h3>Welcome back</h3>
              <div className="wb_username">
                <BsEmojiSmile> </BsEmojiSmile> Elise
              </div>
            </div>

            <Container className="weather_con m_off">
              <Row>
                <Col sm="6" md="2" className="weather_card">
                  <p>Wed Oct 27 </p>
                  <p>09:00am</p>
                  <h1>5&#8451;</h1>
                  <h3>Mostly Cloudy</h3>
                </Col>

                <Col sm="6" md="2" className="weather_card">
                  <p>Wed Oct 27 </p>
                  <p>09:00am</p>
                  <h1>5&#8451;</h1>
                  <h3>Mostly Cloudy</h3>
                </Col>

                <Col sm="6" md="2" className="weather_card">
                  <p>Wed Oct 27 </p>
                  <p>09:00am</p>
                  <h1>5&#8451;</h1>
                  <h3>Mostly Cloudy</h3>
                </Col>

                <Col sm="6" md="2" className="weather_card">
                  <p>Wed Oct 27 </p>
                  <p>09:00am</p>
                  <h1>5&#8451;</h1>
                  <h3>Mostly Cloudy</h3>
                </Col>
              </Row>
            </Container>

            <elix-sliding-pages id="searchSlide" className="mobile_slide">
              <div id="m_card">
                <div className="weather_card">
                  <p>Wed Oct 27 </p>
                  <p>09:00am</p>
                  <h1>5&#8451;</h1>
                  <h3>Mostly Cloudy</h3>
                </div>
              </div>
              <div>
                <div className="weather_card">
                  <p>Wed Oct 27 </p>
                  <p>09:00am</p>
                  <h1>5&#8451;</h1>
                  <h3>Mostly Cloudy</h3>
                </div>
              </div>
              &nbsp;
              <div>
                <div className="weather_card">
                  <p>Wed Oct 27 </p>
                  <p>09:00am</p>
                  <h1>5&#8451;</h1>
                  <h3>Mostly Cloudy</h3>
                </div>
              </div>
            </elix-sliding-pages>

            <br />
            <br />

            <Container className="weather_con">
              <Row>
                <Col sm="6" md="5" className="notifi_card">
                  <EconomicCalendar
                    widgetProps={{
                      width: "100%",
                      theme: "light",
                      style: "1",
                      locale: "en",
                      isTransparent: true,
                      displayMode: "adaptive",
                      locale: "en",
                    }}
                  ></EconomicCalendar>
                </Col>

                <Col sm="6" md="5" className="notifi_card">
                  <h3>Notifications</h3>

                  <div className="noti_items">
                    <div className="noti">
                      <Row>
                        <Col sm="3" md="3" className="noti_img">
                          <img src={noti} />
                        </Col>

                        <Col sm="5" md="5" className="noti_title">
                          AUD/USD FRESH NEW HIGH ABOVE 0.703000
                        </Col>

                        <Col sm="2" md="2">
                          <div className="noti_tag"> </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="noti">
                      <Row>
                        <Col sm="3" md="3" className="noti_img">
                          <img src={noti} />
                        </Col>

                        <Col sm="5" md="5" className="noti_title">
                          AUD/USD FRESH NEW HIGH ABOVE 0.703000
                        </Col>

                        <Col sm="2" md="2">
                          <div className="noti_tag"> </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="noti">
                      <Row>
                        <Col sm="3" md="3" className="noti_img">
                          <img src={noti} />
                        </Col>

                        <Col sm="5" md="5" className="noti_title">
                          AUD/USD FRESH NEW HIGH ABOVE 0.703000
                        </Col>

                        <Col sm="2" md="2">
                          <div className="noti_tag"> </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="noti">
                      <Row>
                        <Col sm="3" md="3" className="noti_img">
                          <img src={noti} />
                        </Col>

                        <Col sm="5" md="5" className="noti_title">
                          AUD/USD FRESH NEW HIGH ABOVE 0.703000
                        </Col>

                        <Col sm="2" md="2">
                          <div className="noti_tag"> </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="noti">
                      <Row>
                        <Col sm="3" md="3" className="noti_img">
                          <img src={noti} />
                        </Col>

                        <Col sm="5" md="5" className="noti_title">
                          AUD/USD FRESH NEW HIGH ABOVE 0.703000
                        </Col>

                        <Col sm="2" md="2">
                          <div className="noti_tag"> </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

            <br />

            <Container className="">
              <Row>
                <Col sm="10" md="12" className=" clk_card">
                  <Row>
                    <Col sm="3" md="3">
                      <ClockWrapper className="clock-card">
                        <A size={300} className="aa" />
                        <h3>New York</h3>
                      </ClockWrapper>
                    </Col>

                    <Col sm="3" md="3">
                      <ClockWrapper className="clock-card">
                        <E size={300} className="aa" />
                        <h3>Tokyo</h3>
                      </ClockWrapper>
                    </Col>

                    <Col sm="3" md="3">
                      <ClockWrapper className="clock-card">
                        <C size={300} className="aa" />
                        <h3>Australia</h3>
                      </ClockWrapper>
                    </Col>

                    <Col sm="3" md="3">
                      <ClockWrapper className="clock-card">
                        <D size={300} className="aa" />
                        <h3>London</h3>
                      </ClockWrapper>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
