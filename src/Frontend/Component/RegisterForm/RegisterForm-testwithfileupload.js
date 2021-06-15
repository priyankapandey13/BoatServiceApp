import { Row, Col, Form, Button, Container } from "react-bootstrap";
// import PropTypes from 'prop-types';
// import { useFormFields } from "../libs/hooksLib";
// import './login.css';
import "./RegisterForm.css";
import { useState, useRef } from "react";
import getCurrentDate from "./CurrentDate";

import axios from "../../Component/axios";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const el = useRef(); // accesing input element
  const [inputs, setInputs] = useState({
    // username: "",
    profilepic: "",
  
  });

  const [file, setFile] = useState(''); // storing the uploaded file    
  const [data, getFile] = useState({ name: "", path: "" });    // storing the recived file from backend
  const [progress, setProgess] = useState(0); // progess bar






  let History = useHistory();
  // const handleSubmit = (event) => {
      // event.preventDefault();
    // if (event) {
    //   // console.log(inputs);
    //   const userdetails = {
    //     username: inputs.username,
       
    //     profile_pic: inputs.profilepic,
        
    //   };
      
    //   axios({
    //     url: "api/uploadimg",
    //     method: "POST",
    //     data: userdetails,
    //   })
    //     .then((response) => {
    //       console.log(response);
      
    //       // History.push("/");
    //       alert("Congratulations!!\n You are succesfully registered\n Please log in for further action.");


    //         localStorage.setItem("user", JSON.stringify(response.data));

    //       return response.data;
    //     })

    //     // }
    //     .catch((err) => {
    //       // console.log("Internal server error");
    //       console.log(err);
    //       if (err.res) {
    //         console.log(err.res.data + "1");
    //         console.log(err.res.status + "2");
    //         console.log(err.res.headers + "3");
    //       } else if (err.req) {
    //         console.log(err.req + "4");
    //       } else {
    //         console.log("Please check the entered information");
    //       }
    //     });
    // }
  // };



  const handleSubmit = () => {
 
    const userdetails = {
         
          profile_pic: inputs.profilepic,
          
        };
    // const formData = new FormData();        
    // formData.append('file', file); // appending file
    axios.post('api/Register', userdetails, {
      
        onUploadProgress: (ProgressEvent) => {
        
            let progress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
            // setProgess(progress);
            console.log(  `this is progress =  ${progress}`);
        }
    }).then(res => {
        console.log(res);
        // getFile({ name: res.data.name,
        //          path: 'http://localhost:4500' + res.data.path
        //        })
    }).catch(err => console.log(err))}





  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));
  };
 

  return (
    // <Row> 
    <Container>
      <h2 className="pt-4 pb-3">Company Registeration</h2>
      {/* <Form encType="multipart/form-data"  action="http://localhost:5000/profilepic" method="POST"  onSubmit={handleSubmit}> */}
        
        {/* <Form.Group controlId="username">
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={handleInputChange}
            value={inputs.name}
            // // required
          />
        </Form.Group> */}

          {/* <Form.Control type="file" placeholder="Profile Pic" onChange={handleInputChange} value={inputs.profile_pic}/> */}
        <Form.Group controlId="profilepic">
          <Form.File
            id="profilepic"
            onChange={handleInputChange}
            value={inputs.profilepic}
            name="profilepic"
            ref={el}
          />
        </Form.Group>

        <Form.Group className="text-center pb-4">
          <Button
            variant="primary"
            type="submit"
            className=" btn-primary btn-lg w-100"
            // onClick={(e) => e.preventDefault}
            onClick={(e) => handleSubmit()}
          >
            Submit
          </Button>

          {/* <Col className="p-0 justify-content-center" sm={12} lg={6}>  */}
          {/* <div className="termConditions mt-4">
    <a href="/" > Terms & Conditions </a></div> */}
          {/* </Col> */}
        </Form.Group>
      {/* </Form> */}
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
