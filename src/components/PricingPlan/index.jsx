import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../config";
import { FooterComponent } from "../HomePage";
import Navbar from "../HomePage/Navbar";
export default function PricingPlan() {
  useEffect(() => {
    document.title = "Pricing Plan | Credt Repair";
  }, []);
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <section className="space--xs bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 style={{ textAlign: 'center' }}><span><strong>Our&nbsp;</strong></span><span><strong>Packages</strong></span><span className="font-weight-normal" style={{ color: '#222162' }}> &amp; Pricing</span></h2>
              </div>
            </div>
            {/*end of row*/}
          </div>
          {/*end of container*/}
        </section>
        <section className="space--sm bg-white">
          <div className="container container_set">
            <div className="row">
              <div className="col-sm-12">
                <div className="columns">
                  <ul className="price">
                    <li className="Header" style={{ backgroundColor: '#00aeef' }}><strong>Monthly Package</strong></li>
                    <li className="grey">
                      <h1><span style={{ color: '#ffffff' }}><strong>$ 249</strong></span></h1>
                      <p><span style={{ color: '#ffffff' }}>enrollment/audit fee</span></p>
                    </li>
                    <li className="grey">
                      <p><span style={{ color: '#ffffff' }}>$99 Monthly Fee</span></p>
                    </li>
                    <li>Credit Education</li>
                    <li>3 Bureau Audit-Analysis</li>
                    <li>24/7 Client Portal Access</li>
                    <li>Customer Service Support</li>
                    <li>Monthly Updates</li>
                    <li>Credit Building</li>
                    <li>No Contract</li>
                    <li>Money Back Guarantee if No Deletions in 120 Days</li>
                    <li>Unlimited Disputes</li>
                    <li className="grey">
                      <Link to={PATH.LOGIN} className="get_started_button">GET STARTED TODAY!</Link></li>
                  </ul>
                </div>
                <div className="columns">
                  <ul className="price">
                    <li className="Header" style={{ backgroundColor: '#ffcc00' }}><strong>CELEBRITY Package</strong></li>
                    <li className="grey">
                      <h1><span style={{ color: '#ffffff' }}><strong>$1999</strong></span></h1>
                      <p><span style={{ color: '#ffffff' }}>enrollment/audit fee</span></p>
                    </li>
                    <li className="grey">
                      <p><span style={{ color: '#ffffff' }}>$599 Monthly Fee</span></p>
                    </li>
                    <li>Credit Education</li>
                    <li>3 Bureau Audit-Analysis</li>
                    <li>24/7 Client Portal Access</li>
                    <li>Customer Service Support</li>
                    <li>Monthly Updates</li>
                    <li>Credit Building</li>
                    <li>No Contract</li>
                    <li>Money Back Guarantee if No Deletions in 120 Days</li>
                    <li>Unlimited Disputes</li>
                    <li><span style={{ color: '#00aeef' }}><strong>Same Letters. Same Results. But You'll Work Directly with the CEO (Ashley Massengill) LIMITED AVAILABILITY</strong></span></li>
                    <li className="grey">
                      <Link to={PATH.LOGIN} className="get_started_button">
                        GET STARTED TODAY!</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/*end of row*/}
          </div>
          {/*end of container*/}
        </section>
        <div className="gradient__bg">
          {/* Footer Start */}
          <FooterComponent />
          {/* Footer End */}
        </div>
      </div>
    </React.Fragment>
  );
}