import { Col, Container, Row } from "react-bootstrap";
import Transaction from "../components/Transaction";
import SidbarAuction from "../components/SidbarAuction";

function TransactionPage(){
    return(
        <>
            <div className="accounts">
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <SidbarAuction />
                        </Col>
                        <Col className="col-md-12">
                            <Transaction />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TransactionPage;