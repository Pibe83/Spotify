import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";
import SearchResultPageFetch from "./SearchResultPage";

const HomeFetch = () => {
  const { rockClassic, popCulture, hipHop } = useSelector(state => state.redBasic);

  const getRandomElements = (array, maxElements) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, maxElements);
  };

  const renderSection = (title, elements, keyPrefix) => (
    <div id={title.toLowerCase()}>
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id={`${title}Section`}>
        {getRandomElements(elements, 4).map((element, index) => (
          <SingleCard element={element} key={`${keyPrefix}_${index}`} />
        ))}
      </div>
    </div>
  );

  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col className="col-10">
          <SearchResultPageFetch />
          {renderSection("Rock Classics", rockClassic, "rock")}
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          {renderSection("Pop Culture", popCulture, "pop")}
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          {renderSection("#HipHop", hipHop, "hiphop")}
        </Col>
      </Row>
    </Col>
  );
};

export default HomeFetch;
