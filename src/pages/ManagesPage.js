import { Col, Container, Row } from "react-bootstrap";
import Manage from "../components/Manage";
import SidbarAuction from "../components/SidbarAuction";

function ManagesPage(){
    return(
        <>
            <Container>
                <Row>
                    <Col className="col-md-12">
                        <SidbarAuction />
                    </Col>
                    <Col className="col-md-12">
                        <Manage />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ManagesPage;