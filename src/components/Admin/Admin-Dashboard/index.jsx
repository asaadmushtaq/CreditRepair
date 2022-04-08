import React from "react";
import { useForm } from "react-hook-form";
import {
  Form, Input, Checkbox, Row, Col, Select, Button,
} from 'antd';
import { Container } from "@material-ui/core";

export default function AdminDashboard() {
  return (
    <React.Fragment>
       <div id="dash-content">
          <div className="business-dashboard">

            <h4>Getting Started</h4>

                   <Row gutter={12}>
                    <Col span={12}>
                        <div className="global-content-card dashboard-card">
                        <div className="emark">1</div>

                          <div className="dash-card-content">
                          <h6>
                              Setting Up Your First Client
                            </h6>
                            <p>Learn how to create your first client, upload their credit report with the click of a button, and create your first dispute letter with two clicks!</p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i> How to get started
                      </Button>
                          </div>
                       </div>
                    
                    </Col>

                    <Col span={12}>
                    <div className="global-content-card dashboard-card">
                        <div className="emark">2</div>

                          <div className="dash-card-content">
                          <h6>
                          How to Use the Dispute Manager
                            </h6>
                            <p>Now that you've created your first client and generated your first dispute letter, learn how to use the dispute manager to generate letters each month.</p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i> Dispute Manage Tutorial
                      </Button>
                          </div>
                       </div>
                    </Col>
                  </Row>



                  <Row gutter={12}>
                    <Col span={12}>
                        <div className="global-content-card dashboard-card">
                        <div className="emark">3</div>

                          <div className="dash-card-content">
                          <h6>
                          Using Custom Letter Templates (optional)
                            </h6>
                            <p>If you'd like to use your own custom letters templates to override your defaults, you can configure it to work seamlessly with the dispute manager.</p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i> Using custom Letter templates
                      </Button>
                          </div>
                       </div>
                    
                    </Col>

                    <Col span={12}>
                    <div className="global-content-card dashboard-card">
                        <div className="emark">4</div>

                          <div className="dash-card-content">
                          <h6>
                          Sending Mail Electronically
                            </h6>
                            <p>Send out physical USPS mail directly from DisputeBee (via API) and never download, print, or physically mail another letter ever again.  </p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i> Sending Mail Electronically
                      </Button>
                          </div>
                       </div>
                    </Col>
                  </Row>



                  <Row gutter={12}>
                    <Col span={12}>
                        <div className="global-content-card dashboard-card">
                        <div className="emark">5</div>

                          <div className="dash-card-content">
                          <h6>
                          Subscribe to CreditCiti
                            </h6>
                            <p>In order to get the full benefit of Creditciti, you will need to subscribe. You'll be able to create unlimited clients and disputes, and add unlimited team members.!</p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i> Susbcribe Now
                      </Button>
                          </div>
                       </div>
                    
                    </Col>

                    <Col span={12}>
                    <div className="global-content-card dashboard-card">
                        <div className="emark">6</div>

                          <div className="dash-card-content">
                          <h6>
                          Complete Your Full Account Setup
                            </h6>
                            <p>Set up the client portal, electronic contracts, client email notifications, client billing integration, and embed a signup form on your website (optional)..</p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i> See All Tutorials
                      </Button>
                          </div>
                       </div>
                    </Col>
                  </Row>

                
           </div>
           
         </div>
    </React.Fragment>
  );
}