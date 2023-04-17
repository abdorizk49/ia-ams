import { Col, Container, Row } from "react-bootstrap";
import "../css/registerPage.css";
import RegisterAMS from "../components/RegisterAMS";
import { Link } from "react-router-dom";

function RegisterPageAMS() {
  return (
    <>
      <section className="formsAMS register-page">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-md-8">
              <Row>
                <Col className="col-md-12">
                  <div className="head-section">
                    <h4> Register </h4>
                    <p>
                      If you have an account with us, please login at&nbsp;
                      <Link to="/login">Login Page</Link>.
                    </p>
                  </div>
                </Col>
              </Row>
              <RegisterAMS />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RegisterPageAMS;
