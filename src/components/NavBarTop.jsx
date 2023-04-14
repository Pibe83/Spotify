import { Row, Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom";


const NavBarTop = () => {
  return (
    <Row className="mb-3">
       <Col className="col-9 col-lg-12 mainLinks d-none d-md-flex" style={{ paddingLeft: "50px" }}>
        <Link to="#">TRENDING</Link>
        <Link to="#">PODCAST</Link>
        <Link to="#">MOODS AND GENRES</Link>
        <Link to="#">NEW RELEASES</Link>
        <Link to="#">DISCOVER</Link>
      </Col>
    </Row>
  );
};

export default NavBarTop;
