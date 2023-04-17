import { useState } from "react";
import { Button, Col, Form, Image, InputGroup } from "react-bootstrap";
import ImageUpload from "../img/icons/upload-01.png";

function RegisterAMS() {
  const [validated, setValidated] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <Form
        className="row"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Col className="col-md-6">
          <Form.Group className="mb-3" controlId="formBasicFName">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="Full Name"
                className="ps-3 pe-5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col className="col-md-6">
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="number"
                placeholder="Phone Number"
                className="ps-3 pe-5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Phone.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col className="col-md-12">
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="file"
                className="ps-3 pe-5"
                onChange={handleFileSelect}
              />
              <div className="upload_file form-control ps-3 pe-5">
                <Image src={ImageUpload} alt="Upload File" />
                <span>Your Image</span>
              </div>
              <Form.Control.Feedback type="invalid">
                Please enter a valid Photo.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <div className="nameFile mb-3"><strong>{selectedFile && selectedFile.name}</strong></div>
        </Col>
        <Col className="col-md-12">
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="Address"
                className="ps-3 pe-5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Address.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col className="col-md-6">
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
        <Col className="col-md-6">
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
          <Button variant="" className="mb-0" type="submit">
            <span>Register</span>
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default RegisterAMS;
