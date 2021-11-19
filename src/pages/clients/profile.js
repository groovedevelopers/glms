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
import Alert from "react-bootstrap/Alert";
// import { useAlert } from "react-alert";

const Profile = () => {
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

            <div className="wb_text">
              <h3>Contact@gmail.com</h3>
              <div className="wb_username">
                <BsEmojiSmile> </BsEmojiSmile> Elise
              </div>
            </div>

            <Container className="weather_con ">
              <Row>
                <Col sm="6" md="5" className="weather_card">
                  <div>
                      <div>Subscriptions </div>

                      <div>Upgrade </div>
                  </div>

                  <div>
                      <div>Subscriptions </div>

                      <div>Upgrade </div>
                  </div>
                </Col>

                <Col sm="6" md="5" className="weather_card">
                  <p>Wed Oct 27 </p>
                  <p>09:00am</p>
                  <h1>5&#8451;</h1>
                  <h3>Mostly Cloudy</h3>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
