import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "../../assets/css/clients/style.css";
import oc from "../../assets/images/dashboard/oc.png";
import { Button } from "react-bootstrap";
import { AdvancedChart } from "react-tradingview-embed";
import video from "../../assets/images/dashboard/vid.png";

const TechArticles = () => {
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
            <br />
            <br />
            <Container className="mb">
              <Row>
                <Col sm="12" md="10" className="techart">
                  <Row>
                    <Col sm="2" md="2" className="techart_img">
                      <img src={oc} />
                    </Col>
                    <Col sm="7" md="7" className="techart_body">
                      <div className="ta_title">
                        produce weekly forecasts on Mondays and a weekly review
                        for different currencies on Fridays
                      </div>

                      <div className="ta_details">
                        <div>Luz Goke in Studiolive </div>
                        &nbsp; &nbsp;
                        <div>Oct 21 . 5 min read </div>
                      </div>
                    </Col>
                    <Col sm="3" md="3">
                      <Button className="techart_btn">Read More</Button>
                    </Col>
                  </Row>
                </Col>

                <Col sm="12" md="10" className="techart">
                  <Row>
                    <Col sm="2" md="2" className="techart_img">
                      <img src={oc} />
                    </Col>
                    <Col sm="7" md="7" className="techart_body">
                      <div className="ta_title">
                        produce weekly forecasts on Mondays and a weekly review
                        for different currencies on Fridays
                      </div>

                      <div className="ta_details">
                        <div>Luz Goke in Studiolive </div>
                        &nbsp; &nbsp;
                        <div>Oct 21 . 5 min read </div>
                      </div>
                    </Col>
                    <Col sm="3" md="3">
                      <Button className="techart_btn">Read More</Button>
                    </Col>
                  </Row>
                </Col>

                <Col sm="12" md="10" className="techart">
                  <Row>
                    <Col sm="2" md="2" className="techart_img">
                      <img src={oc} />
                    </Col>
                    <Col sm="7" md="7" className="techart_body">
                      <div className="ta_title">
                        produce weekly forecasts on Mondays and a weekly review
                        for different currencies on Fridays
                      </div>

                      <div className="ta_details">
                        <div>Luz Goke in Studiolive </div>
                        &nbsp; &nbsp;
                        <div>Oct 21 . 5 min read </div>
                      </div>
                    </Col>
                    <Col sm="3" md="3">
                      <Button className="techart_btn">Read More</Button>
                    </Col>
                  </Row>
                </Col>

                <Col sm="12" md="10" className="techart">
                  <Row>
                    <Col sm="2" md="2" className="techart_img">
                      <img src={oc} />
                    </Col>
                    <Col sm="7" md="7" className="techart_body">
                      <div className="ta_title">
                        produce weekly forecasts on Mondays and a weekly review
                        for different currencies on Fridays
                      </div>

                      <div className="ta_details">
                        <div>Luz Goke in Studiolive </div>
                        &nbsp; &nbsp;
                        <div>Oct 21 . 5 min read </div>
                      </div>
                    </Col>
                    <Col sm="3" md="3">
                      <Button className="techart_btn">Read More</Button>
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

export default TechArticles;
