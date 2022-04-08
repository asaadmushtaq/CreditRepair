import React from "react";
import { useForm } from "react-hook-form";
import {
  Form, Input, Checkbox, Row, Col, Select, Button,
} from 'antd';
import { Container } from "@material-ui/core";

export default function ClientDashbaord() {
  return (
    <React.Fragment>
       <div id="dash-content">
          <div className="business-dashboard">

            <div className="client-dashboard">
            <Row gutter={12}>
                    <Col span={6}>
                        <div className="global-content-card dashboard-card">
                          <div className="global-content-header header-light-blue">
                            <h6>Active Dispute</h6>
                          </div>

                          <div className="dash-card-content">
                         <h3>0</h3>
                          </div>
                        
                       </div>
                    
                    </Col>

                    <Col span={6}>
                        <div className="global-content-card dashboard-card">
                        <div className="global-content-header header-blue">
                          <h6>Closed Dispute</h6>

</div>
                          <div className="dash-card-content">
                         <h3>0</h3>
                          </div>
                        
                       </div>
                    
                    </Col>
                    <Col span={6}>
                        <div className="global-content-card dashboard-card">
                        <div className="global-content-header header-red">
                          <h6>Remove Items</h6>

</div>
                          <div className="dash-card-content">
                         <h3>0</h3>
                          </div>
                        
                       </div>
                    
                    </Col>
                    <Col span={6}>
                        <div className="global-content-card dashboard-card">
                        <div className="global-content-header header-green">
                          <h6>Credit Report Status</h6>

</div>
                          <div className="dash-card-content">
                            <p><b>Credentials:</b> N/A</p>
                            <p><b>Last Pull Attempts:</b> N/A</p>
                            <p><b>Last Pull Status:</b> N/A</p>
                            <p><b>Last Report Date:</b> N/A</p>
                         
                          </div>
                        
                       </div>
                    
                    </Col>
                  </Row>
            </div>


            <h4>Getting Started</h4>

                   <Row gutter={12}>
                    <Col span={12}>
                        <div className="global-content-card dashboard-card">
                        <div className="emark">1</div>

                          <div className="dash-card-content">
                          <h6>
                              Setting Up Your Credit Report
                            </h6>
                            <p>Your first step to use CreditCiti to import your credit reports. Your credit reports will automatically analyze to look for negative items.</p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i> Import now
                      </Button>
                          </div>
                       </div>
                    
                    </Col>

                    <Col span={12}>
                    <div className="global-content-card dashboard-card">
                        <div className="emark">2</div>

                          <div className="dash-card-content">
                          <h6>
                        Save Your Name, Address etc
                            </h6>
                            <p>This information is used to automatically populate dispute letter template with your personal information.</p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i>Edit basic information
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
                         Creat a dispute
                            </h6>
                            <p>Our Education material and dispute wizard will help you to create your first dispute and generate a letter for you. you will email it automatically.</p>
                          </div>
                        

                          <div className="dash-card-footer">
                          <Button type="submit" className="light-dash-button">
                       <i className="fa fa-arrow-right"></i> Create You first dispute
                      </Button>
                          </div>
                       </div>
                    
                    </Col>
                    <Col span={12}>
                        <div className="global-content-card dashboard-card">
                        <div className="emark">4</div>

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
                  </Row>



                
           </div>
           
         </div>
    </React.Fragment>
  );
}