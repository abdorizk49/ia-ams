
import "../css/accountsAMS.css";
import "../css/sidebarAMS.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import SidbarAuction from "./SidbarAuction";
import { useEffect, useState } from "react";

function Accounts() {
  const [accountsData, setAccountsData] = useState();
  const accountsUrl = "http://localhost:9000/accounts";
  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = () => {
    fetch(accountsUrl)
      .then((res) => res.json())
      .then((data) => {
        setAccountsData(data);
      });
  };

  const accountDataTable = accountsData?.map((account) => {
    return (
      <tr key={account.id} id={account.id}>
        <td>{account.id}</td>
        <td>{account.name}</td>
        <td>{account.phone}</td>
        <td>{account.email}</td>
        <td><Image src={account.image} style={{width: '100px'}} /> </td>
        <td>{account.address}</td>
      </tr>
    );
  });

  return (
    <>
      <Container>
        <Row>
          <Col className="col-md-12">
            <SidbarAuction />
          </Col>
          <Col className="col-md-12">
            <div className="accounts">
              <h1>Accounts</h1>
              <table className="table table-striped mt-5 products-table">
                <thead>
                  <tr key="0">
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Image</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>{accountDataTable}</tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Accounts;
