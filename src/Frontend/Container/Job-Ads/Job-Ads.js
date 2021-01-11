import "../../../App.css";
import Header from "../../Container/Header/Header";
import LeftNavi from "../../Component/LeftNavi/Leftnavi";
import ContentContainer from "../../Component/ContentContainer/ContentContainer";
import { Row, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <LeftNavi />
          <ContentContainer>
            <h2>Welcome to job ads</h2>
          </ContentContainer>
        </Row>
      </Container>
    </div>
  );
}

export default App;
