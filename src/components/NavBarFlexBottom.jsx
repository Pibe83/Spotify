import { Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlayButton from "../assets/img/playerbuttons/Play.png";
import NextButton from "../assets/img/playerbuttons/Next.png";
import PreviousButton from "../assets/img/playerbuttons/Previous.png";
import RepeatButton from "../assets/img/playerbuttons/Repeat.png";
import ShuffleButton from "../assets/img/playerbuttons/Shuffle.png";

const NavBarFlexBottom = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-lg-10 offset-lg-2">
          <Row>
            <Col className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <Link to="#">
                  <Image src={ShuffleButton} alt="shuffle" />
                </Link>
                <Link to="#">
                  <Image src={PreviousButton} alt="previous" />
                </Link>
                <Link to="#">
                  <Image src={PlayButton} alt="shuffle" />
                </Link>
                <Link to="#">
                  <Image src={NextButton} alt="shuffle" />
                </Link>
                <Link to="#">
                  <Image src={RepeatButton} alt="shuffle" />
                </Link>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBarFlexBottom;
