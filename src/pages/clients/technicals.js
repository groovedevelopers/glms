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

const Technicals = () => {
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
            <Container  className="mb">
              <Row>
                <Col sm="12" md="3" >
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

                      <Card.Text>
                      28 Aug 2021
                      </Card.Text>

                      <Button className="main-carousel_btn">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>


                <Col sm="12" md="3" >
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

                      <Card.Text>
                      28 Aug 2021
                      </Card.Text>

                      <Button className="main-carousel_btn">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>


                <Col sm="12" md="3">
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

                      <Card.Text>
                      28 Aug 2021
                      </Card.Text>

                      <Button className="main-carousel_btn">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>


                <Col sm="12" md="3">
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

                      <Card.Text>
                      28 Aug 2021
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

export default Technicals;
