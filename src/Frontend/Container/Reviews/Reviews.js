import "../../../App.css";
import Header from "../../Container/Header/Header";
import LeftNavi from "../../Component/LeftNavi/Leftnavi";
import ContentContainer from "../../Component/ContentContainer/ContentContainer";
import { Row, Container } from "react-bootstrap";

function Reviews() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <LeftNavi />
          <ContentContainer>
            <h2>Welcome to reviews page</h2>
          </ContentContainer>
        </Row>
      </Container>
    </div>
  );
}

export default Reviews;
