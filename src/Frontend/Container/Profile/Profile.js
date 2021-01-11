// import '../../../App.css';
import Header from "../../Container/Header/Header";
import LeftNavi from "../../Component/LeftNavi/Leftnavi";
import ContentContainer from "../../Component/ContentContainer/ContentContainer";
import ProfileComp from "../../Component/Profile/Profile";
import { Row, Container } from "react-bootstrap";
// import { createRef } from 'react';

function Profile() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  // const ref = createRef();
  console.log(currentUser.user);

  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <LeftNavi />
          <ContentContainer>
            <ProfileComp Userdetails={currentUser.user} />
          </ContentContainer>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
