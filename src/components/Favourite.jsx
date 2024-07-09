import { Button, Col, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favourite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favouriteArray = useSelector((state) => state.favourites.content);
  console.log(favouriteArray);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {favouriteArray.map((work, i) => (
                <ListGroupItem className="d-flex gap-5" key={i}>
                  <Link to={"/" + work.company_name}>
                    <h5>{work.company_name}</h5>
                  </Link>
                  <p>{work.job_type}</p>
                  <p>{work.publication_date}</p>
                  <Button
                    className="ms-auto"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: work,
                      });
                    }}
                  >
                    Elimina 🗑️
                  </Button>
                </ListGroupItem>
              ))}
            </ListGroup>
            <Button onClick={() => navigate("/")}>Back to home</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Favourite;
