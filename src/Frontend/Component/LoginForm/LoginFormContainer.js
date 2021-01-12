// import React, { useState } from "react";
import { Col, Container, Row } from "../../../../node_modules/react-bootstrap";
import "./LoginForm.css";
import Logo from "../../assets/images/logo/logo.svg";
import Slider from "../Slider/Slider";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
// import UserContext from '../../../AppContext';

function LoginFormContainer({
    inputs,
    handleInputChange,
    handleSubmit,
}) {
  // const [LoginUserInfo, SetLoginUserInfo] = useState();
  // const [IsUserLogin, SetIsUserLogin] = useState(false);

//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });


  return (
    <Row>
      <Container fluid className="loginpage pl-0 pb-0 m-0">
        <Slider />
      </Container>
      <Container fluid className="loginwrapper">
        <Row>
          <Col className="logincontainer offset-lg-5 p-0" sm={12} lg={3}>
            <h1 className="p-2 pb-3">
              <img src={Logo} alt="Logo" />
            </h1>
            {/* <UserContext.Provider value={{LoginUserInfo }}> */}
            <LoginForm
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
            {/* </UserContext.Provider> */}
          </Col>
        </Row>
      </Container>
    </Row>
  );
}


LoginForm.propTypes = {
    inputs : PropTypes.object.isRequired, 
    handleInputChange : PropTypes.func.isRequired,
    handleSubmit : PropTypes.func.isRequired,


  };

  
export default LoginFormContainer;
