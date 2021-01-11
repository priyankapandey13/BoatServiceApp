import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "../node_modules/react-router-dom";
import Dashboard from "./Frontend/Container/Dashbord/Dashbord";
import Login from "./Frontend/Container/Login/login";
import Register from "./Frontend/Container/Register/register";
import JobAds from "./Frontend/Container/Job-Ads/Job-Ads";
import Proposals from "./Frontend/Container/Proposals/Proposals";
import Reviews from "./Frontend/Container/Reviews/Reviews";
import Profile from "./Frontend/Container/Profile/Profile";
import Home from "./Frontend/Container/Home/Home";
// import UserContext from './AppContext';

function App() {
  // const [LoginUserInfo, SetLoginUserInfo] = useState();
  // const [IsUserLogin, SetIsUserLogin] = useState(false);
  // console.log(LoginUserInfo);

  // const getCurrentUser = () => {
  //   const currentUser = JSON.parse(localStorage.getItem("user"));
  //   SetLoginUserInfo(currentUser);
  // }

  // useEffect(() => {
  //     getCurrentUser();
  //   }, []);

  return (
    // <div className="App">
    // <UserContext.Provider value={{LoginUserInfo }}>
    // <UserContext.Consumer value={{ LoginUserInfo, SetLoginUserInfo }}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Job-Ads">
          <JobAds />
        </Route>
        <Route exact path="/Proposals">
          <Proposals />
        </Route>
        <Route exact path="/Reviews">
          <Reviews />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </Router>

    //  </UserContext.Consumer>
    // </UserContext.Provider>
    // </div>
  );
}

export default App;
