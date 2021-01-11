import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Notification from "../../assets/images/icons/notification.svg";
import Email from "../../assets/images/icons/email.svg";
import User from "../../assets/images/icons/user.svg";
import Logo from "../../assets/images/logo/logo.svg";
import PropTypes from "prop-types";
// import { forwardRef } from "react";

// const config = require("config");

function Headers(Userdetails, logout) {
  const logout1 = () => {
    // e.preventdefault();
    console.log("I logoout");
    localStorage.removeItem("user");
  };

  // const userinfo = req.header('x-auth-token');
  // const username = config.data.username;
  // console.log(username);
  // console.log("Find me");
  // const [username] = Userdetails;
  // console.log( Userdetails.UserInfo.name);

  // const [IsLogin, SetIsLogin] = useState(true);
  // const[UserInfo, SetUserInfo] = useState(Userdetails.UserInfo);
  // SetUserInfo(username);
  // console.log(UserInfo);
  console.log(Userdetails);
  // console.log(Userdetails.UserInfo.user);

  // const CustomToggle = forwardRef(({ children, onClick }, ref) => (
  //   <a href="" ref={ref} onClick={(e) => {
  //       e.preventDefault();
  //       onClick(e);
  //     }}
  //   >
  //     {children}
  //     &#x25bc;
  //   </a>
  // ));

  return (
    <Navbar expand="lg" className="header navbar-dark">
      <button
        aria-controls="basic-navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        className="navbar-toggler lefNaviControl mr-4"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Navbar.Brand href="#home">
        <img src={Logo} alt="Logo" />
        {/* {UserInfo.name} */}
        {/* {appState} */}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="pr-2 mr-2">
            <img src={Notification} alt="Notifications" />
          </Nav.Link>
          <Nav.Link href="#link" className="pr-3 mr-2">
            <img src={Email} alt="Email" />
          </Nav.Link>
          <img src={User} alt="User" className="mr-2" />
          <NavDropdown
            title={Userdetails.UserInfo.user.name}
            //
            // title={(IsLogin ? `Welcome ${UserInfo.username}` : "User")}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/Profile">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item onClick="Hi" href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/" onClick={() => logout1()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Headers.propTypes = {
  Userdetails: PropTypes.object,
  logout: PropTypes.func,
};

export default Headers;
