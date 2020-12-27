import React from "react";
// Components
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 unique-color">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Pizza Shop</h5>
            <p>Great Food,Great offers</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Disclaimer</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: pizzashop.com
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
