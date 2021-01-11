import React, { useState } from "react";
// import { Col, Container, Row } from "../../../../node_modules/react-bootstrap";
import "./login.css";
// import Logo from "../../assets/images/logo/logo.png";
// import Slider from "../../Component/Slider/Slider";
import LoginFormContainer from "../../Component/LoginForm/LoginFormContainer";

import axios from "../../Component/axios";
// import UserContext from '../../../AppContext';
import { useHistory } from "react-router-dom";

function Login() {
  // const [LoginUserInfo, SetLoginUserInfo] = useState();
  // const [IsUserLogin, SetIsUserLogin] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));
  };

  let History = useHistory();
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      const userdetails = {
        username: inputs.username,
        password: inputs.password,
      };

      // SetLoginInfo(userdetails);
      // console.log(userdetails);

      axios({
        url: "api/login",
        method: "POST",
        data: userdetails,
      })
        .then((response) => {
          // console.log(`You are successfully logged in and redirected :  ${response}`);
          // SetLoginUserInfo(response.data);
          // console.log(response);
          // console.log(response.data);

          console.log(response.data);
          // console.log(response.data.accessToken);

          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            alert("localstorage is set");
            History.push("/Dashboard");
          }

          return response.data;
        })

        .catch((err) => {
          // console.log("Internal server error");
          if (err.res) {
            console.log(err.res.data + "1");
            console.log(err.res.status + "2");
            console.log(err.res.headers + "3");
          } else if (err.req) {
            console.log(err.req + "4");
          } else {
            console.log(
              "Please check the username and password/ you are not authorized user"
            );
          }
        });
    }
  };

  return (
    // <UserContext.Provider value={{LoginUserInfo }}>
    <LoginFormContainer
      inputs={inputs}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
    // </UserContext.Provider>
  );
}

export default Login;
