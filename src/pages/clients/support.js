import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "../../assets/css/clients/style.css";
import chat from "../../assets/images/dashboard/chat.png";
import { Button } from "react-bootstrap";
import { BsChat } from "react-icons/bs";
import { CgFlagAlt } from "react-icons/cg";
import { AdvancedChart } from "react-tradingview-embed";
import video from "../../assets/images/dashboard/vid.png";

const Support = () => {
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

           
            <Container className="mb center_contain">
              <Row>
                <Col sm="12" md="3" className="weather_card">
                  <div className="support">
                    <div className="support_chat">
                      <BsChat className="icon"></BsChat>
                    </div>

                    <h3>Get in Touch</h3>

                    <Button className="techart_btn">Contact Us</Button>
                  </div>
                </Col>


                <Col sm="12" md="3" className="weather_card">
                  <div className="support">
                    <div className="support_chat">
                      <BsChat className="icon"></BsChat>
                    </div>

                    <h3>Setup Guide</h3>

                    <Button className="techart_btn">Show Me</Button>
                  </div>
                </Col>

                <Col sm="12" md="3" className="weather_card">
                  <div className="support">
                    <div className="support_chat">
                      <CgFlagAlt className="icon"></CgFlagAlt>
                    </div>

                    <h3>Dashboard </h3>

                    <Button className="techart_btn">Start</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;
