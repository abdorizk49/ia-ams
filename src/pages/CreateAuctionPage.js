import { Col, Container, Row } from "react-bootstrap";
import CreateAuction from "../components/CreateAuction";
import SidbarAuction from "../components/SidbarAuction";

function CreateAuctionPage() {
  return (
    <>
      <section className="auctionpage">
        <Container>
            <Row>
                <Col className="col-md-4">
                    <SidbarAuction />
                </Col>
                <Col className="col-md-8">
                    <CreateAuction />
                </Col>
            </Row>
        </Container>
      </section>
    </>
  );
}

export default CreateAuctionPage;
