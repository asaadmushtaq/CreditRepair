import React from "react";
import { useForm } from "react-hook-form";
import { allMonthList } from "./../../../../config";
import {
  Form, Input, Radio, Checkbox, Row, Col, Select, Button,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
export default function CreateNewClient() {
  const { register, handleSubmit } = useForm();
  function onSubmit() {

  }
  const [value, setValue] = React.useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <React.Fragment>
      {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
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
                <h4>Create New Client</h4>
                <button type="button" className="global-button blue-ghost x-small hoverable">Cancel</button>
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
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <h5 className="settings-header">Date of Birth</h5>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item>
                        <Select>
                          {allMonthList.map((month, index) => {
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
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={2}>
                      <Form.Item>
                        <Input
                          name="year"
                          placeholder="Year"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={12}>
                      <h5 className="settings-header">IdentityIQ Credentials</h5>
                      <Form.Item
                        name="password"
                        valuePropName="checked"
                      >
                        <Checkbox>View password?</Checkbox>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={18}>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Username (client)">
                        <Input
                          name="Username"
                          placeholder="IdentityIQ Username"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Password (client)">
                        <Input
                          name="password"
                          placeholder="IdentityIQ Password"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <Form.Item label="Last four SSN (client)">
                        <Input
                          name="SSN"
                          placeholder="IdentityIQ Password"
                          ref={register()}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={12}>
                      <div className="idiq-source-box"><span style={{ marginRight: 10 }}>Source:</span>
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio value={1}>Standard IdentityIQ</Radio>
                          <Radio value={2}>MyScoreIQ</Radio>
                        </Radio.Group>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16} className="mt-3">
                    <Col className="gutter-row" span={8}>
                      <h5 className="settings-header">ID Verification (ex. Driver's License)</h5>
                      <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                      >
                        <Upload name="logo" action="/upload.do" listType="picture">
                          <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <h5 className="settings-header">Address Verification (ex. Utility Bill)</h5>
                      <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                      >
                        <Upload name="logo" action="/upload.do" listType="picture">
                          <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col className="gutter-row" span={8}>
                      <h5 className="settings-header">Social Security Card (optional)</h5>
                      <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                      >
                        <Upload name="logo" action="/upload.do" listType="picture">
                          <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <h5 className="settings-header">ID Theft Affidavit (optional)</h5>
                      <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                      >
                        <Upload name="logo" action="/upload.do" listType="picture">
                          <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>
                  <h6 className="mb-3">Forms of acceptable identity/address verification documents can be found here.</h6>
                  <Row gutter={12}>
                    <Col className="gutter-row" span={3}>
                      <Button type="submit" className="create_client_btn">
                        Create Client
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
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Form, Row, Col, Dropdown } from "react-bootstrap";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { allMonthList } from "./../../../../config";
// export default function CreateNewClient() {
//   const { register, handleSubmit } = useForm();
//   function onSubmit() {

//   }
//   const [month, setMonth] = useState();
//   return (
//     <React.Fragment>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <div id="dash-content">
//           <div id="new-client">
//             <div className="global-content-card ">
//               <div className="global-content-card-header ">
//                 <h4>Create New Client</h4>
//                 <button type="button" className="global-button blue-ghost x-small hoverable">Cancel</button>
//               </div>
//               <div className="global-content-card-body ">
//                 <div id="basic-info">
//                   <h5 className="settings-header">Basic Info</h5>
//                   <Row className="mb-3">
//                     <Form.Group as={Col}>
//                       <Form.Label>First Name</Form.Label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                     <Form.Group as={Col}>
//                       <Form.Label>Last Name</Form.Label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col}>
//                       <Form.Label>Address</Form.Label>
//                       <input
//                         type="text"
//                         name="address"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                     <Form.Group as={Col}>
//                       <Form.Label>Address 2</Form.Label>
//                       <input
//                         type="text"
//                         name="address2"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col}>
//                       <Form.Label>City</Form.Label>
//                       <input
//                         type="text"
//                         name="city"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                     <Form.Group as={Col}>
//                       <Form.Label>State</Form.Label>
//                       <input
//                         type="text"
//                         name="state"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col}>
//                       <Form.Label>Zip Code</Form.Label>
//                       <input
//                         type="text"
//                         name="zipCode"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                     <Form.Group as={Col}>
//                       <Form.Label>Social Security Number</Form.Label>
//                       <input
//                         type="text"
//                         name="securityNumber"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                   </Row>
//                   <h5 className="settings-header">Contact Information</h5>
//                   <Row className="mb-3">
//                     <Form.Group as={Col}>
//                       <Form.Label>Phone</Form.Label>
//                       <input
//                         type="number"
//                         name="phone"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                     <Form.Group as={Col}>
//                       <Form.Label>Email Address</Form.Label>
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                   </Row>
//                   <h5 className="settings-header">Date of Birth</h5>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} className="dropdown_bg_grey">
//                       <Dropdown alignRight>
//                         <Dropdown.Toggle
//                           variant="success"
//                           id="dropdown-basic"
//                           className="text-left"
//                         >
//                           {month ? month : "Select Month"}
//                           <IoMdArrowDropdown />
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu className="shadow">
//                           <MonthsList setMonth={setMonth} />
//                         </Dropdown.Menu>
//                       </Dropdown>
//                     </Form.Group>
//                     <Form.Group as={Col}>
//                       <input
//                         type="number"
//                         name="day"
//                         placeholder="Day"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                     <Form.Group as={Col}>
//                       <input
//                         type="number"
//                         name="year"
//                         placeholder="year"
//                         className="form-control"
//                         ref={register()}
//                       />
//                     </Form.Group>
//                   </Row>
//                   <div className="settings-header flex center-y">
//                     <h5>IdentityIQ Credentials</h5>
//                     {['checkbox'].map((type) => (
//                       <div key={`default-${type}`} className="mb-3">
//                         <Form.Check
//                           type={type}
//                           id={`default-${type}`}
//                           label={`default ${type}`}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                   <button className="global-button  blue medium   hoverable   " style={{ width: 300 }}>Create Client</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Form>
//     </React.Fragment>
//   );
// }
// function MonthsList(props) {
//   return (
//     <>
//       <Dropdown.Item
//         onClick={() => props.setMonth("January")}
//       >
//         {"January"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("February")}
//       >
//         {"February"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("March")}
//       >
//         {"March"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("April")}
//       >
//         {"April"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("May")}
//       >
//         {"May"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("June")}
//       >
//         {"June"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("July")}
//       >
//         {"July"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("August")}
//       >
//         {"August"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("September")}
//       >
//         {"September"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("October")}
//       >
//         {"October"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("November")}
//       >
//         {"November"}
//       </Dropdown.Item>
//       <Dropdown.Item
//         onClick={() => props.setMonth("December")}
//       >
//         {"December"}
//       </Dropdown.Item>
//     </>
//   )
// }