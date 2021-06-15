import { Row, Col, Form, Button, Container } from "react-bootstrap";
// import PropTypes from 'prop-types';
// import { useFormFields } from "../libs/hooksLib";
// import './login.css';
import "./RegisterForm.css";
import { useState } from "react";
import getCurrentDate from "./CurrentDate";

import axios from "../../Component/axios";
import { useHistory } from "react-router-dom";

// function UserRedirect() {
//   var txt;
//   var r = confirm("Press a button!");
//   if (r == true) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: "",
    // profilepic: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    role: "",
    created_at: "",
  });
  let History = useHistory();
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      // console.log(inputs);
      const userdetails = {
        username: inputs.username,
        password: inputs.password,
        // profile_pic: inputs.profilepic,
        email: inputs.email,
        phone_number: inputs.phone,
        address: inputs.address,
        zip_code: inputs.zipcode,
        city: inputs.city,
        user_role_id: inputs.role,
        created_at: getCurrentDate(),
      };
      console.log(userdetails);
      
      axios({
        url: "api/creatuser",
        method: "POST",
        data: userdetails,
      })
        .then((response) => {
          console.log(response);
          // alert(response);
          // UserRedirect();
          console.log(response);
          // History.push("/");
          alert("Congratulations!!\n You are succesfully registered\n Please log in for further action.");


          // let decide = confirm("Congratulations!!\n You are succesfully registered\n Please log in for further action.");
          // if (decide === true) {
          //   History.push("/login");
          // } else {
          //   History.push("/Home");
          // }

          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            // History.push("/Dashboard");

            console.log(response);
            alert(response);
          }

          return response.data;
        })

        // }
        .catch((err) => {
          // console.log("Internal server error");
          console.log(err);
          if (err.res) {
            console.log(err.res.data + "1");
            console.log(err.res.status + "2");
            console.log(err.res.headers + "3");
          } else if (err.req) {
            console.log(err.req + "4");
          } else {
            console.log("Please check the entered information");
          }
        });
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));
  };
  // const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

  // const [Forminfo, SetForminfo] = useFormFields({
  //   name: "",
  //   profile_pic: "",
  //   email: "",
  //   password: "",
  //   phone_number: "",
  //   address: "",
  //   zip_code: "",
  //   city: "",
  //   user_role: "",
  // });

  // const [Values, setValues] = useState('');

  // const inputEl = useRef(null);

  // async function handlesubmit (e){
  //   e.preventDefault();

  //   // console.log(e.target[0].value);
  //   console.log(Forminfo);
  //   // console.log(Forminfo.address.current.value);
  //   // if(Forminfo.name.current.value,Forminfo.email.current.value,Forminfo.profile_pic.current.value,
  //   //   Forminfo.password.current.value, Forminfo.phone_number.current.value, Forminfo.address.current.value,
  //   //   Forminfo.zip_code.current.value, Forminfo.city.current.value, Forminfo.user_role.current.value)
  //   // const alluser = e.target
  // }

  // const handleOnChange = (e) =>{
  //   console.log(...e.target.Name)
  // }

  // async function handleOnChange(e){
  //   // alert(e)
  //   await setValues(...Values, e.target.value);
  //   console.log(Values)
  //   // SetForminfo(...Forminfo, e.target.value);
  // }

  return (
    // <Row>
    <Container>
      <h2 className="pt-4 pb-3">Company Registeration</h2>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group controlId="username">
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={handleInputChange}
            value={inputs.name}
            // // required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={inputs.email}
            // required
          />
        </Form.Group>

          {/* <Form.Control type="file" placeholder="Profile Pic" onChange={handleInputChange} value={inputs.profile_pic}/> */}
        {/* <Form.Group controlId="profilepic">
          <Form.File
            id="profilepic"
            onChange={handleInputChange}
            value={inputs.profilepic}
          />
        </Form.Group> */}

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={inputs.password}
            // required
          />
        </Form.Group>

        <Col lg={12} className="pt-3 pb-3">
          <Row>
            <Col className="" sm={12} lg={6}>
              <Form.Group controlId="role">
                {/* <Form.Control type="name" placeholder="Select User role"  onChange={handleInputChange} value={inputs.user_role} /> */}

                <Form.Control
                  as="select"
                  onChange={handleInputChange}
                  value={inputs.userrole}
                  // required
                >
                  <option value="1">Customer</option>
                  <option value="2">Staff Member</option>
                  <option value="3">Supervisor</option>
                  <option value="4">Manager</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col className="" sm={12} lg={6}>
              <Form.Group controlId="phone">
                <Form.Control
                  type="phone"
                  placeholder="Input Phone no"
                  onChange={handleInputChange}
                  value={inputs.phone}
                  // required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="" sm={12} lg={6}>
              <Form.Group controlId="zipcode">
                <Form.Control
                  type="name"
                  placeholder="Zip code"
                  onChange={handleInputChange}
                  value={inputs.zipcode}
                  // required
                />
              </Form.Group>
            </Col>

            <Col className="" sm={12} lg={6}>
              <Form.Group controlId="city">
                <Form.Control
                  type="phone"
                  placeholder="City"
                  onChange={handleInputChange}
                  value={inputs.city}
                  // required
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>

        <Form.Group controlId="address">
          {/* <Form.Control type="text" placeholder="Address" onChange={handleInputChange} value={inputs.address} /> */}
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Address"
            onChange={handleInputChange}
            value={inputs.address}
            // required
          />
        </Form.Group>

        <Form.Group className="text-center pb-4">
          <Button
            variant="primary"
            type="submit"
            className=" btn-primary btn-lg w-100"
            onClick={(e) => e.preventDefault}
          >
            Submit
          </Button>

          {/* <Col className="p-0 justify-content-center" sm={12} lg={6}>  */}
          {/* <div className="termConditions mt-4">
    <a href="/" > Terms & Conditions </a></div> */}
          {/* </Col> */}
        </Form.Group>
      </Form>
    </Container>
    // </Row>
  );
}

LoginForm.propTypes = {
  // value: PropTypes.string.is// required,
  // placeholder: PropTypes.string,
  // onChange: PropTypes.func.is// required,
  // onSubmit: PropTypes.func.is// required,
};

// LoginForm.defaultProps = {
//   placeholder: '',
// };

export default LoginForm;
