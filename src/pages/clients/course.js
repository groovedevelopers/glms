import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "../../assets/css/clients/style.css";
import oc from "../../assets/images/dashboard/oc.png";
import { Link } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import { EconomicCalendar } from "react-tradingview-embed";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import "elix/define/SlidingPages";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Course = () => {
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

            

            <Container fluid className="mb">
            
            <div className="course_menu">
              
              <elix-sliding-pages id="courseSlide" className="">
                <div>
                  <div className="next">
                    <FaLongArrowAltLeft className="icon"></FaLongArrowAltLeft>
                  </div>

                  <div className="course_cat">introduction to Forex </div>
                  <div className="s_dot"></div>
                  &nbsp;
                  <div className="l_dot"></div>
                  &nbsp;
                  <div className="s_dot"></div>

                  <div className="course_cat">introduction to Forex</div>

                  <div className="s_dot"></div>
                  &nbsp;
                  <div className="l_dot"></div>
                  &nbsp;
                  <div className="s_dot"></div>

                  <div className="course_cat">introduction to Forex</div>

                  <div className="s_dot"></div>
                  &nbsp;
                  <div className="l_dot"></div>
                  &nbsp;
                  <div className="s_dot"></div>

                  <div className="course_cat">introduction to Forex</div>
                 


                  <div className="next">
                    <FaLongArrowAltRight className="icon"></FaLongArrowAltRight>
                  </div>
                </div>
              </elix-sliding-pages>
            </div>

            

              <Row>

                <Col sm="12" md="4">
                  <Card className="main-carousel">
                    <img src={oc} />

                    <Card.Body>
                      <Card.Title className="main-carousel_title">
                        MasterClass
                      </Card.Title>
                      <Card.Text>
                        exchange market is a global decentralized or over the
                        counter market for the trading of currencies
                      </Card.Text>

                      <Button className="main-carousel_btn">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm="12" md="4">
                  <Card className="main-carousel">
                    <img src={oc} />

                    <Card.Body>
                      <Card.Title className="main-carousel_title">
                        MasterClass
                      </Card.Title>
                      <Card.Text>
                        exchange market is a global decentralized or over the
                        counter market for the trading of currencies
                      </Card.Text>

                      <Button className="main-carousel_btn">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm="12" md="4">
                  <Card className="main-carousel">
                    <img src={oc} />

                    <Card.Body>
                      <Card.Title className="main-carousel_title">
                        MasterClass
                      </Card.Title>
                      <Card.Text>
                        exchange market is a global decentralized or over the
                        counter market for the trading of currencies
                      </Card.Text>

                      <Button className="main-carousel_btn">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
