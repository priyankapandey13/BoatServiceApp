import Header from "../../Container/Header/Header";
import ContentContainer from "../../Component/ContentContainer/ContentContainer";
import { Row, Container } from "react-bootstrap";

function Home() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <ContentContainer>
            <h2>Welcome User</h2>
          </ContentContainer>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
