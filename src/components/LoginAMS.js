import { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

function LoginAMS() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Form className="row" noValidate validated={validated} onSubmit={handleSubmit}>
        <Col className="col-md-12">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="email"
                placeholder="E-mail"
                className="ps-3 pe-5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid E-mail.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col className="col-md-12">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                className="ps-3 pe-5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col className="col-md-12 justify-content-center d-flex">
          <Button variant="" type="submit">
            <span>Login</span>
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default LoginAMS;
