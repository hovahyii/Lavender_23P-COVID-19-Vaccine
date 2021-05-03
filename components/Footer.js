/*!
=========================================================
* Argon Design System React - v1.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';


const SimpleFooter = () => {

    return (
      <>
        <footer className="footer">
          <Container>
          <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Like our content? You can join us too!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                 Support our developer by buying him ☕
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
              <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/hovahyii">
                  <img src="https://github.com/appcraftstudio/buymeacoffee/raw/master/Images/snapshot-bmc-button.png" width="100%"  />
              </a>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href={`${DOMAIN}/about-us.html`}
                    target="_blank"
                  >
                    Lavender_23P
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
               
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href={`${DOMAIN}/blogs`}
                     
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href={`${DOMAIN}/disclaimer.html`}
                      target="_blank"
                    >
                      Disclaimer
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
  );
};

export default SimpleFooter;