import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import "../../assets/css/clients/style.css";
import { Screener, ForexHeatMap } from "react-tradingview-embed";

const Signals = () => {
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
            <div className="mb ">
              <Container fluid>
                <Row>
                  <Col
                    sm="12"
                    md="6"
                    className="dashboard_weather_cols"
                    style={{
                      height: "50vh",
                     
                      marginLeft: "-10px",
                    }}
                  >
                    <div className="chart_cards"
                      style={{
                        marginTop: "20px",
                        height: "45vh",
                        overflowX: "scroll",
                        
                      }}
                    >
                      <Screener
                        widgetProps={{
                          width: "100%",
                          //   height: "50vh",
                          timezone: "Europe/Berlin",
                          theme: "light",
                          style: "1",
                          locale: "en",
                          toolbar_bg: "#f1f3f6",

                          showSymbolLogo: true,
                          // isTransparent: true,
                          displayMode: "adaptive",
                          isTransparent: true,
                          locale: "en",
                          details: true,
                          container_id: "tradingview_d89b8",
                        }}
                      />
                    </div>
                  </Col>
                  <Col
                    sm="12"
                    md="6"
                    className="dashboard_weather_cols"
                    style={{ height: "50vh", padding: "10px" }}
                  >
                    <div className="chart_cards"
                      style={{
                        marginTop: "10px",
                        marginLeft: "-10px",
                        height: "45vh",
                        overflowX: "scroll",
                      }}
                    >
                      <ForexHeatMap
                        widgetProps={{
                          width: "100%",
                          //   height: "50vh",
                          timezone: "Europe/Berlin",
                          theme: "light",
                          style: "1",
                          locale: "en",
                          toolbar_bg: "#f1f3f6",

                          showSymbolLogo: true,
                          // isTransparent: true,
                          displayMode: "adaptive",
                          isTransparent: true,
                          locale: "en",
                          details: true,
                          container_id: "tradingview_d89b8",
                        }}
                      />
                    </div>
                  </Col>

                 
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signals;
