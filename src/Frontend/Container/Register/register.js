import { Col, Container, Row } from "../../../../node_modules/react-bootstrap";
// import { useState } from "react";
import "./register.css";
import Logo from "../../assets/images/logo/logo.png";
import Slider from "../../Component/Slider/Slider";
import RegisterForm from "../../Component/RegisterForm/RegisterForm";
// import ContentContainer from '../../Component/ContentContainer/ContentContainer';

function DashboardContentarea() {
  // const [Forminfo, SetForminfo] = useState({
  //   name:"",
  //   profile_pic:"",
  //   email:"",
  //   password:"",
  //   phone_number:"",
  //   address:"",
  //   zip_code:"",
  //   city:"",
  //   user_role:"",
  // });

  // const CallOnChange = (e) =>{
  //   alert("i am called on Change");
  // }

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

            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </Row>
  );
}

export default DashboardContentarea;
