import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CreateAuction() {
  const [auctionsData, setAuctionsData] = useState();
  const auctionsUrl = "http://localhost:9000/products";
  useEffect(() => {
    getAllAuctions();
  }, []);

  const getAllAuctions = () => {
    fetch(auctionsUrl)
      .then((res) => res.json())
      .then((data) => {
        setAuctionsData(data);
      });
  };
  const deleteAuction = (auction) => {
    Swal.fire({
      title: `Are you sure to Delete ${auction.title}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`${auctionsUrl}/${auction.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            getAllAuctions(data);
          });
      }
    });
  };
  const auctionDataTable = auctionsData?.map((auction) => {
    return(
        <tr key={auction.id} id={auction.id}>
            <td>{auction.id}</td>
            <td>{auction.title.slice(0, 30)}</td>
            <td>{auction.category}</td>
            <td>{auction.description.slice(0, 100)}...</td>
            <td>{auction.price}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteAuction(auction)}>Delete</button>
                <Link to={`/auctions/${auction.id}`} className="btn btn-info btn-sm">View</Link>
                <Link to={`/auctions/edit/${auction.id}`} className="btn btn-primary btn-sm">Edit</Link>
            </td>
        </tr>
    )
})
  return (
    <>
    <Container>
      <h1>Auctions page</h1>
      <Link to={"/Auctions/add"} className="btn btn-success mt-3">
        Add New Auction
      </Link>
      <table className="table table-striped mt-5 Auctions-table">
        <thead>
          <tr key="0">
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>{auctionDataTable}</tbody>
      </table>
    </Container>
    </>
  );
}

export default CreateAuction;
