import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Dropdown } from "react-bootstrap";
import { FieldError } from "../../assets/genericComponents/ErrorMessage";
import { PATH } from "../../config";
import { Link } from "react-router-dom";
import { convertBase64 } from "../../assets";
import { FiCheckCircle } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
export default function ProfileEdit() {
  useEffect(() => {
    document.title = "Profile || EduTech";
  }, []);
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data) {}
  const [name, setName] = useState("Jason Tan");
  const [profile, setProfile] = useState("PIF Capital Pte Ltd");
  const [phoneNo, setPhoneNo] = useState("8675 6788");
  const [email, setEmail] = useState("jasontan256@world.com");
  const [
    about,
    setAbout,
  ] = useState(`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
  consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet`);
  const [profilePicture, setProfilePicture] = useState(null);

  const onChangeProfilePicture = (e) => {
    let file = e.target.files[0];
    if (file) {
      convertBase64(file).then((getValue) => {
        setProfilePicture([getValue]);
      });
    }
  };
  const [selectFont, setSelectFont] = useState(null);
  const [selectLanguage, setSelectLanguage] = useState(null);
  const [selectCountry, setSelectCountry] = useState(null);
  return (
    <div className="profile-view">
      <div className="row">
        <div className="col-12 col-xl-9 col-lg-9">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="card border-0">
              <div className="card-body">
                <div className="img-sec mb-5">
                  {/* {
                    profilePicture ? <img alt="" className="img-fluid" src={profilePicture} /> : <div className="add-pictures"><FaCamera size={35} /></div>
                  } */}
                  <img alt="" className="img-fluid" src={profilePicture} />{" "}
                  <div className="add-pictures">
                    <FaCamera size={35} />
                  </div>
                  <Form.File
                    custom
                    bsCustomPrefix="form-file-input"
                    name="files"
                    id="upload-file"
                    data-browse="UPLOAD"
                    accept="image/*"
                    onChange={(e) => {
                      onChangeProfilePicture(e);
                    }}
                  />
                </div>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="mt-1"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter First Name"
                    style={{
                      borderColor: errors && errors.name ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />
                  {name !== "" ? <FiCheckCircle className="check-icon" /> : ""}
                  {errors.name && (
                    <FieldError message={"This Field is Required"} />
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Profile</Form.Label>
                  <Form.Control
                    className="mt-1"
                    name="profile"
                    type="text"
                    value={profile}
                    onChange={(e) => {
                      setProfile(e.target.value);
                    }}
                    style={{
                      borderColor: errors && errors.profile ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />
                  {profile !== "" ? (
                    <FiCheckCircle className="check-icon" />
                  ) : (
                    ""
                  )}
                  {errors.profile && (
                    <FieldError message={"This Field is Required"} />
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control
                    className="mt-1"
                    name="phoneNo"
                    type="number"
                    value={phoneNo}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                    style={{
                      borderColor: errors && errors.phoneNo ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />
                  {phoneNo !== "" ? (
                    <FiCheckCircle className="check-icon" />
                  ) : (
                    ""
                  )}
                  {errors.phoneNo && (
                    <FieldError message={"This Field is Required"} />
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="mt-1"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    style={{
                      borderColor: errors && errors.email ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />
                  {email !== "" ? <FiCheckCircle className="check-icon" /> : ""}
                  {errors.email && (
                    <FieldError message={"This Field is Required"} />
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Language</Form.Label>
                  <div className="dropdown_bg_grey">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="text-left form-control mt-1"
                      >
                        {selectLanguage ? selectLanguage : "Language"}
                        <IoMdArrowDropdown />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="shadow">
                        <Dropdown.Item
                          onClick={() => setSelectLanguage("English")}
                        >
                          English
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setSelectLanguage("French")}
                        >
                          French
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setSelectLanguage("Spanish")}
                        >
                          Spanish
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <div className="dropdown_bg_grey">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="text-left form-control mt-1"
                      >
                        {selectCountry ? selectCountry : "Country"}
                        <IoMdArrowDropdown />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="shadow">
                        <Dropdown.Item
                          onClick={() => setSelectCountry("London")}
                        >
                          London
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setSelectCountry("America")}
                        >
                          America
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setSelectCountry("Brazil")}
                        >
                          Brazil
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>About me</Form.Label>
                  <Form.Control
                    className="mt-1"
                    name="about"
                    as="textarea"
                    rows={4}
                    value={about}
                    onChange={(e) => {
                      setAbout(e.target.value);
                    }}
                    style={{
                      borderColor: errors && errors.about ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />
                  {about !== "" ? <FiCheckCircle className="check-icon" /> : ""}
                  {errors.about && (
                    <FieldError message={"This Field is Required"} />
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="text-right mb-3">
              <Button type="button" className="cancel_button mr-2">
                {"Cancel"}
              </Button>
              <Link to={PATH.PROFILESHOW}>
                <Button type="submit" className="update_button">
                  {"Update Profile"}
                </Button>
              </Link>
            </div>
          </Form>
        </div>
        <div className="col-12 col-xl-3 col-lg-3">
          <div className="card border-0">
            <div className="card-body mode-select">
              <Form.Group className="d-flex align-items-center justify-content-between">
                <Form.Label>Dark mode</Form.Label>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </Form.Group>
              <Form.Group className="dropdown_bg_white">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="form-label text-left bg-transparent pl-0"
                  >
                    {selectFont ? selectFont : "Select font"}
                    <IoMdArrowDropdown />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="shadow">
                    <Dropdown.Item onClick={() => setSelectFont("16")}>
                      16
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectFont("18")}>
                      18
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectFont("20")}>
                      20
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectFont("22")}>
                      22
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function ButtonSection(props) {
//   const [buttonState, setButtonState] = useState(false);
//   let { index } = props;
//   return (
//     <Button
//       type="button"
//       key={index}
//       onClick={() => setButtonState(!buttonState)}
//       className={`cursor ${buttonState === true ? "active" : ""}`}
//     >
//       {props.interest.text}
//     </Button>
//   );
// }
