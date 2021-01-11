import "./Header.css";
import Headerlogin from "../../Component/Header/Header-login";
import Headernologin from "../../Component/Header/Header-nologin";

function Headers() {
  // const LoginUserInfo = useContext(UserContext);

  // const [IsLogin, SetIsLogin] = useState(true);
  // const[LoginUserInfo, SetLoginUserInfo] = useState({
  //   name: ""
  // });
  // console.log(LoginUserInfo);
  // console.log(LoginUserInfo);

  const logout = () => {
    localStorage.removeItem("user");
  };

  // const currentUser = (!JSON.parse(localStorage.getItem("user"))) ? "guest" : JSON.parse(localStorage.getItem("user"));
  const currentUser = JSON.parse(localStorage.getItem("user"));

  // const getCurrentUser = () => {
  //   return JSON.parse(localStorage.getItem("user"));
  // };
  // console.log(currentUser.status);

  // if(!currentUser || currentUser.status !== 200){
  //   return(<Headernologin />);
  //   }else {
  //     return(<Headerlogin UserInfo={currentUser} logout={logout} /> );
  //   }

  if (!currentUser || currentUser.status !== "200") {
    return <Headernologin />;
  }
  if (currentUser || currentUser.status === "200") {
    return <Headerlogin UserInfo={currentUser} logout={logout} />;
  }

  // return (

  // { if( currentUser.status == 200) {
  //   (<Headerlogin UserInfo={currentUser} logout={logout}/>)
  // }else {
  // <Headerlogin UserInfo={currentUser} logout={logout} />
  // }

  // (!currentUser.status === 200) ? <Headernologin /> : <Headerlogin UserInfo={currentUser} logout={logout} />

  // <UserContext.Consumer>
  //   {({LoginUserInfo }) => (
  // setappState(...UserInfo)
  //  UserInfo={appState}
  //
  //     )}
  // </UserContext.Consumer>
  // );
}

export default Headers;
