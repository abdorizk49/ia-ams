import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function EditAuction() {
  const auctionsUrl = "http://localhost:9000/auctions";
  let {auctionId} = useParams()
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();



  const formSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `${auctionsUrl}/${auctionId}`,
      data: {
        name,
        category,
        description,
        image,
        price,
      },
    }).then((data) => {
      console.log(data);
      navigate("/seller");
    });
  };


  return (
    <>
      <div className="pt-5 pb-5">
        <Container>
          <h3>Update Auction {auctionId}</h3>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="auctionName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="auctionName"
                aria-describedby="auction Name"
                placeholder="auction Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="auctionCategory" className="form-label">
                Category
              </label>
              <input
                className="form-control"
                id="auctionCategory"
                placeholder="auction Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="auctionDescription" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="auctionDescription"
                aria-describedby="auction Description"
                placeholder="auction Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="auctionImage" className="form-label">
                Image
              </label>
              <input
                type="text"
                className="form-control"
                id="auctionImage"
                aria-describedby="auction Image"
                placeholder="auction Image URL"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="auctionPrice" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="auctionPrice"
                aria-describedby="auction Price"
                placeholder="auction Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </Container>
      </div>
    </>
  );
}

export default EditAuction;
