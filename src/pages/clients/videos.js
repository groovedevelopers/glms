import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "../../assets/css/clients/style.css";
import { AdvancedChart } from "react-tradingview-embed";
import video from "../../assets/images/dashboard/vid.png";

const Videos = () => {
  // <!-- ////////// PRODUCT OF OBSIDIAN INC., WRITTEN AND DESIGNED BY GROOVE DEVELOPERS INC. YOU ARE PROHIBITED FROM USING OR EDITING
  // THIS APPLICATION WITHOUT INFORMING GROOVE DEVELOPERS INC AND OBSIDIAN INC. ///////////-->

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="2" className="sidebar-col">
            <Sidebar></Sidebar>
          </Col>
          <Col sm="12" md="10" className="mainbody">
            <Header></Header>

            <div className="clearfix"></div>
            <div className="mb">
              
              {/* <h3 className="hero_title">Weekly BreakDowns</h3> */}

<br />
<br />
              <Row>
                <Col sm="12" md="3" className="video_card">
                  <img src={video} />

                  <div className="video_card_title">WHAT IS FOREX?</div>
                </Col>

                <Col sm="12" md="3" className="video_card">
                  <img src={video} />

                  <div className="video_card_title">WHAT IS FOREX?</div>
                </Col>

                <Col sm="12" md="3" className="video_card">
                  <img src={video} />

                  <div className="video_card_title">WHAT IS FOREX?</div>
                </Col>

                <Col sm="12" md="3" className="video_card">
                  <img src={video} />

                  <div className="video_card_title">WHAT IS FOREX?</div>
                </Col>

                
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Videos;
