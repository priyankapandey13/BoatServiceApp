import { Row, Col } from "react-bootstrap";
// import PropTypes from 'prop-types';
import "../../../App.css";

// , containercontent
const ContentContainer = ({children}) => {
  
  return (
    <Col sm={12} lg={9} className="ml-auto mr-auto mt-5">
      {/* <h2 className="mb-5">{containerTitle}</h2> */}
      <Row>
      {children}
      </Row>
    </Col>
  );
}

// ContentContainer.propTypes = {
//   containerTitle: PropTypes.string,
// };


export default ContentContainer;
