import {Col, Form, Button, Container } from "react-bootstrap";
// import './login.css';
import './LoginForm.css';
// import useSignInForm from './CustomHooks';
import PropTypes from "prop-types";
// import { propTypes } from "react-bootstrap/esm/Image";

function LoginForm({
  inputs, handleInputChange, handleSubmit
}) {

  // const {inputs, handleInputChange, handleSubmit} = useSignInForm();
  
  return (
    // <Row>
    inputs,
    <Container>
    <h2 className="pt-4 pb-3">Company Login</h2>
    <Form onSubmit={handleSubmit}>
  <Form.Group controlId="username">
    <Form.Control type="text" placeholder="Username" value={inputs.username} onChange={handleInputChange} required />
  </Form.Group>

  <Form.Group controlId="password">    
    <Form.Control type="password" placeholder="Password" value={inputs.password} onChange={handleInputChange} required />
  </Form.Group>
<Col lg={12} className="pt-3 pb-3">
  {/* <Row>
  <Col className="" sm={12} lg={6}>
  <Form.Group id="rememberme">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  </Col>
  <Col className="forgotpwd" sm={12} lg={6}>
<a href="/" >Forgot password ?</a>
  </Col>
  
  </Row> */}
</Col>

<Form.Group controlId="signinbtn" className="text-center pb-4">
  <Button variant="primary" type="submit" className=" btn-primary btn-lg w-100">
    Sign In
  </Button>

   {/* <Col className="p-0 justify-content-center" sm={12} lg={6}> */}
   <div className="termConditions mt-4">
    <a href="/Register" > New user, Register Here </a></div> 
   {/* </Col>  */}
  </Form.Group>
</Form>
</Container>
    // </Row>
  );
}

LoginForm.propTypes = {
  inputs : PropTypes.object.isRequired, 
  handleInputChange : PropTypes.func.isRequired,
  handleSubmit : PropTypes.func.isRequired,
};

export default LoginForm;
