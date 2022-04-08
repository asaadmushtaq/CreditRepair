import React from "react";
import { useForm } from "react-hook-form";
import {
  Form, Input, Checkbox, Row, Col, Select, Button,
} from 'antd';
import { allMonthList } from "./../../../config";

export default function AdminSettings() {
  const { register, handleSubmit } = useForm();
  function onSubmit() {

  }
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  return (
    <React.Fragment>
      <Form
        layout={"vertical"}
        onSubmit={handleSubmit(onSubmit)}
        initialValues={{
          layout: "vertical",
        }}
        className="create_clients"
      >
        <div id="dash-content">
          <div id="new-client">
            <div className="global-content-card ">
              <div className="global-content-card-header ">
                <h4>Basic Information</h4>
              </div>
              <div className="global-content-card-body ">
                <div id="basic-info">
                  <h5 className="settings-header">Basic Info</h5>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="First Name">
                        <Input
                          name="firstName"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Last Name">
                        <Input
                          name="lastName"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Address">
                        <Input
                          name="address"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Address 2">
                        <Input
                          name="address 2"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="City">
                        <Input
                          name="city"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="State">
                        <Input
                          name="state"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Zip Code">
                        <Input
                          name="zipCode"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Social Security Number">
                        <Input
                          name="socialSecurityNumber"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <h5 className="settings-header">Contact Information</h5>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Phone">
                        <Input
                          name="phone"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Email Address">
                        <Input
                          name="email"
                          disabled
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <h5 className="settings-header">Date of Birth</h5>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item>
                        <Select
                          size="default"
                          placeholder="Please select"
                          onChange={handleChange}
                        >
                          {allMonthList?.map((month, index) => {
                            return (
                              <Select.Option value={month.value} key={index}>{month.text}</Select.Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={2}>
                      <Form.Item>
                        <Input
                          name="day"
                          placeholder="Day"
                          maxLength={2}
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={2}>
                      <Form.Item>
                        <Input
                          name="year"
                          placeholder="Year"
                          maxLength={4}
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row d-flex align-items-center" span={12}>
                      <h5 className="settings-header mr-3 mb-0">IdentityIQ Credentials</h5>
                      <Form.Item
                        name="password"
                        valuePropName="checked"
                        className="mb-0"
                      >
                        <Checkbox>View password?</Checkbox>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={18}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Username">
                        <Input
                          name="Username"
                          placeholder="IdentityIQ Username"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Password">
                        <Input
                          name="password"
                          placeholder="IdentityIQ Password"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Last four SSN">
                        <Input
                          name="SSN"
                          placeholder="XXXX"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={3}>
                      <Button type="submit" className="create_client_btn">
                        Save Basic Info
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </React.Fragment >
  );
}
