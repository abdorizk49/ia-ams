import { Col, Container, Row } from "react-bootstrap";
// import Accounts from "../components/Accounts";
import SidbarAuction from "../components/SidbarAuction";

function AdminPage(){
    return(
        <>
            <Container>
                <Row>
                    <Col className="col-md-12">
                        <SidbarAuction />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminPage;