import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Dropdown } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import { allMonthList } from "./../../../../config";
export default function CreateNewClient() {
  const { register, handleSubmit } = useForm();
  function onSubmit() {

  }
  const [month, setMonth] = useState();
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Last Name</Form.Label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Address</Form.Label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Address 2</Form.Label>
                      <input
                        type="text"
                        name="address2"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>City</Form.Label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>State</Form.Label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Zip Code</Form.Label>
                      <input
                        type="text"
                        name="zipCode"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Social Security Number</Form.Label>
                      <input
                        type="text"
                        name="securityNumber"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                  </Row>
                  <h5 className="settings-header">Contact Information</h5>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Phone</Form.Label>
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Email Address</Form.Label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                  </Row>
                  <h5 className="settings-header">Date of Birth</h5>
                  <Row className="mb-3">
                    <Form.Group as={Col} className="dropdown_bg_grey">
                      <Dropdown alignRight>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="text-left"
                        >
                          {month ? month : "Select Month"}
                          <IoMdArrowDropdown />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="shadow">
                          <MonthsList setMonth={setMonth} />
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <input
                        type="number"
                        name="day"
                        placeholder="Day"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <input
                        type="number"
                        name="year"
                        placeholder="year"
                        className="form-control"
                        ref={register()}
                      />
                    </Form.Group>
                  </Row>
                  <div className="settings-header flex center-y">
                    <h5>IdentityIQ Credentials</h5>
                    {['checkbox'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={`default ${type}`}
                        />
                      </div>
                    ))}
                  </div>
                  <button className="global-button  blue medium   hoverable   " style={{ width: 300 }}>Create Client</button>
                </div>
                {/* <div id="basic-info"><h5 className="settings-header">Basic Info</h5><div className="flex input-row "><div className="global-text-input input" style={{ width: 250 }}><div className="label">First Name</div><input type="text" placeholder className="   " aria-label="First Name" defaultValue /></div><div className="global-text-input input" style={{ width: 250 }}><div className="label">Last Name</div><input type="text" placeholder className="   " aria-label="Last Name" defaultValue /></div></div><div className="flex input-row "><div className="global-text-input input" style={{ width: 250 }}><div className="label">Address</div><input type="text" placeholder className="   " aria-label="Address" defaultValue /></div><div className="global-text-input input" style={{ width: 250 }}><div className="label">Address 2</div><input type="text" placeholder className="   " aria-label="Address 2" defaultValue /></div></div><div className="flex input-row "><div className="global-text-input input" style={{ width: 250 }}><div className="label">City</div><input type="text" placeholder className="   " aria-label="City" defaultValue /></div><div className="global-text-input input" style={{ width: 250 }}><div className="label">State</div><input type="text" placeholder className="   " aria-label="State" defaultValue /></div></div><div className="flex input-row "><div className="global-text-input input" style={{ width: 250 }}><div className="label">Zip Code</div><input type="text" placeholder className="   " aria-label="Zip Code" defaultValue /></div><div className="flex input-row center-y"><div className="global-text-input input" style={{ width: 250 }}><div className="label"><div className="flex space-between-x"><span>Social Security Number</span></div></div><input type="text" placeholder className="   " aria-label="Social Seurity Number" defaultValue /></div></div></div><h5 className="settings-header">Contact Information</h5><div className="flex input-row "><div className="global-text-input input" style={{ width: 250 }}><div className="label">Phone</div><input type="text" placeholder className="   " aria-label="Phone" defaultValue /></div><div className="global-text-input " style={{ width: 250 }}><div className="label"><div className="flex space-between-x"><span>Email Address</span></div></div><input type="text" placeholder className="   " aria-label="Email" defaultValue /></div></div><h5 className="settings-header">Date of Birth</h5><div className="flex input-row"><div className="ant-select-lg ant-select ant-select-enabled" style={{ width: 150 }}><div className="ant-select-selection
      ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="f3d537f8-05ff-4f8a-bef2-7ddbfaee6355" aria-expanded="false" aria-label="Date of Birth" tabIndex={0}><div className="ant-select-selection__rendered"><div className="ant-select-selection-selected-value" title="January" style={{ display: 'block', opacity: 1 }}>January</div></div><span className="ant-select-arrow" unselectable="on" style={{ userSelect: 'none' }}><i aria-label="icon: down" className="anticon anticon-down ant-select-arrow-icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></i></span></div></div><div className="global-text-input input" style={{ width: 50 }}><input type="text" placeholder="Day" className aria-label="Day" defaultValue /></div><div className="global-text-input input" style={{ width: 60 }}><input type="text" placeholder="Year" className aria-label="Year" defaultValue /></div></div><div className="settings-header flex center-y"><h5>IdentityIQ Credentials</h5><label className="ant-checkbox-wrapper" style={{ marginLeft: 20 }}><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span><span>View password?</span></label></div><div className="flex input-row "><div className="global-text-input " style={{ width: 215 }}><div className="label">Username (client)</div><input autoComplete="off" type="text" placeholder="IdentityIQ Username" className="   " aria-label="IdentityIQ Username" defaultValue /></div><div className="flex input-row center-y"><div className="global-text-input " style={{ width: 185 }}><div className="label">Password (client)</div><input autoComplete="new-password" type="password" placeholder="IdentityIQ Password" className="   " aria-label="IdentityIQ Password" defaultValue /></div><div className="global-text-input " style={{ width: 215 }}><div className="label">Last four SSN (client)</div><input type="password" placeholder="XXXX" className="   " aria-label="Last four SSN (client)" defaultValue /></div></div></div><div className="flex input-row center-y"><div className="idiq-source-box"><span style={{ marginRight: 10 }}>Source:</span><div className="ant-radio-group ant-radio-group-outline"><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input type="radio" className="ant-radio-input" defaultValue="identityiq" defaultChecked /><span className="ant-radio-inner" /></span><span>Standard IdentityIQ</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input type="radio" className="ant-radio-input" defaultValue="myscoreiq" /><span className="ant-radio-inner" /></span><span>MyScoreIQ</span></label></div></div></div><div className="flex documents "><div className="file-upload-box"><h5 className="settings-header document-heading">ID Verification (ex. Driver's License)</h5><span className><div className="ant-upload ant-upload-select ant-upload-select-text"><span tabIndex={0} className="ant-upload" role="button"><input type="file" accept style={{ display: 'none' }} /><div className="upload-box"><button type="button" className="ant-btn"><i aria-label="icon: upload" className="anticon anticon-upload"><svg viewBox="64 64 896 896" focusable="false" className data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" /></svg></i><span>Click to Upload</span></button></div></span></div></span></div><div className="file-upload-box"><h5 className="settings-header document-heading">Address Verification (ex. Utility Bill)</h5><span className><div className="ant-upload ant-upload-select ant-upload-select-text"><span tabIndex={0} className="ant-upload" role="button"><input type="file" accept style={{ display: 'none' }} /><div className="upload-box"><button type="button" className="ant-btn"><i aria-label="icon: upload" className="anticon anticon-upload"><svg viewBox="64 64 896 896" focusable="false" className data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" /></svg></i><span>Click to Upload</span></button></div></span></div></span></div></div><div className="flex documents "><div className="file-upload-box"><h5 className="settings-header document-heading">Social Security Card (optional)</h5><span className><div className="ant-upload ant-upload-select ant-upload-select-text"><span tabIndex={0} className="ant-upload" role="button"><input type="file" accept style={{ display: 'none' }} /><div className="upload-box"><button type="button" className="ant-btn"><i aria-label="icon: upload" className="anticon anticon-upload"><svg viewBox="64 64 896 896" focusable="false" className data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" /></svg></i><span>Click to Upload</span></button></div></span></div></span></div><div className="file-upload-box"><h5 className="settings-header document-heading">ID Theft Affidavit (optional)</h5><span className><div className="ant-upload ant-upload-select ant-upload-select-text"><span tabIndex={0} className="ant-upload" role="button"><input type="file" accept style={{ display: 'none' }} /><div className="upload-box"><button type="button" className="ant-btn"><i aria-label="icon: upload" className="anticon anticon-upload"><svg viewBox="64 64 896 896" focusable="false" className data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" /></svg></i><span>Click to Upload</span></button></div></span></div></span></div></div><div className="document-note">Forms of acceptable identity/address verification documents can be found <a target="_blank" href="https://help.equifax.com/s/article/What-documentation-should-I-send-in-to-validate-my-ID-or-address">here</a>.</div><button className="global-button  blue medium   hoverable   " style={{ width: 300 }}>Create Client</button></div> */}

              </div>
            </div>
          </div>
        </div>
      </Form>
    </React.Fragment>
  );
}
function MonthsList(props) {
  return (
    <>
      <Dropdown.Item
        onClick={() => props.setMonth("January")}
      >
        {"January"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("February")}
      >
        {"February"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("March")}
      >
        {"March"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("April")}
      >
        {"April"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("May")}
      >
        {"May"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("June")}
      >
        {"June"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("July")}
      >
        {"July"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("August")}
      >
        {"August"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("September")}
      >
        {"September"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("October")}
      >
        {"October"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("November")}
      >
        {"November"}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => props.setMonth("December")}
      >
        {"December"}
      </Dropdown.Item>
    </>
  )
}