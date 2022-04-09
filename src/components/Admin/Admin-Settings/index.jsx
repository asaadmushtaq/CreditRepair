import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form, Input, Checkbox, Row, Col, Select, Button,
} from 'antd';
import { allMonthList } from "./../../../config";
import { ClientManageProfile, ClientGetProfile } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../Navigation/Auth/ProvideAuth";
import { Loader, ErrorMessage } from "../../../assets";

export default function AdminSettings() {
  let auth = useAuth();
  let dispatch = useDispatch();
  let List = useSelector((state) => state.clientReducer);
  useEffect(() => {
    dispatch(ClientGetProfile(auth.credit_repair_user.userId));
  }, [dispatch]);
  return (
    <>
      {List &&
        List.clientGetProfileLoading === true &&
        List.clientGetProfileSuccess === false &&
        List.clientGetProfileFailure === false && <Loader />}
      {
        List &&
        List.clientGetProfileLoading === false &&
        List.clientGetProfileSuccess === false &&
        List.clientGetProfileFailure === true &&
        <ErrorMessage message={List.clientGetProfileError} />
      }
      {
        List &&
        List.clientGetProfileLoading === false &&
        List.clientGetProfileSuccess === true &&
        List.clientGetProfileFailure === false &&
        <AdminSettingsInfo list={List?.clientGetProfile} />
      }
    </>
  );
}
function AdminSettingsInfo(props) {
  let Save = useSelector((state) => state.clientReducer);
  let dispatch = useDispatch();
  const { register } = useForm();
  function onFinish(data) {
    let finalData = {
      userId: props.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: props.email,
      countryId: 0,
      stateId: 0,
      cityId: 0,
      zipCode: data.zipCode,
      primaryAddress: data.primaryAddress,
      secondaryAddress: data.secondaryAddress,
      dob: data.dob,
      ssn: data.ssn,
      userNameIdentity: data.userNameIdentity,
      passwordIdentity: data.passwordIdentity
    }
    // dispatch(ClientManageProfile(finalData, notification));
    console.log("data", data)
  }
  function notification(data) {
    // toast.success(data, TOASTER_STYLING_VALUES)
  }
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  console.log("props", props.list)
  return (
    <React.Fragment>
      <Form
        name="basic"
        layout={"vertical"}
        onFinish={onFinish}
        initialValues={{ layout: "vertical" }}
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
                      <Form.Item
                        label="First Name"
                        name="firstName"
                      >
                        <Input
                          defaultValue={props?.list?.firstName}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Last Name" name="lastName">
                        <Input

                          defaultValue={props?.list?.lastName}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Primary Address" name="primaryAddress">
                        <Input

                          defaultValue={props?.list?.primaryAddress}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Secondary Address" name="secondaryAddress">
                        <Input
                          defaultValue={props?.list?.secondaryAddress}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={4}>
                      <Form.Item label="City" name="cityId">
                        <Input
                          defaultValue={props?.list?.cityName}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={4}>
                      <Form.Item label="State" name="stateId">
                        <Input
                          defaultValue={props?.list?.stateName}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={4}>
                      <Form.Item label="Country" name="countryId">
                        <Input
                          defaultValue={props?.list?.countryName}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Zip Code" name="ZipCode">
                        <Input

                          defaultValue={props?.list?.zipCode}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Social Security Number">
                        <Input
                          name="SSN"
                          defaultValue={props?.list?.ssn}
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
                          defaultValue={props?.list?.phone}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Email Address">
                        <Input
                          name="email"
                          disabled
                          defaultValue={props?.list?.email}
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
                          name="userNameIdentity"
                          placeholder="IdentityIQ Username"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Password">
                        <Input
                          name="PasswordIdentity"
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
                      <Button type="button" htmlType="submit" className="create_client_btn">
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
