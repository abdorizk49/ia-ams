import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../css/AuctionAMS.css'
import { Container, Image } from "react-bootstrap";

function Auctions(){
    const [auctionsData, setAuctionsData] = useState()
    const auctionsUrl = 'http://localhost:9000/auctions'
    useEffect(() => {
        getAllAuctions();
    }, [])

    const getAllAuctions = () => {
        fetch(auctionsUrl)
        .then((res) => res.json())
        .then((data) => {
            setAuctionsData(data)
        })
    }

    const deleteAuction = (auction) => {
        Swal.fire({
            title: `Are you sure to Delete ${auction.title}?`,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed){
                fetch(`${auctionsUrl}/${auction.id}`, {
                    method: "DELETE"
                }).then((res)=> (res).json())
                .then((data) => {
                    getAllAuctions(data);
                })
            }
        })
    }


    const auctionDataTable = auctionsData?.map((auction) => {
        return(
            <tr key={auction.id} id={auction.id}>
                <td>{auction.id}</td>
                <td>{auction.name}</td>
                <td>{auction.category}</td>
                <td>{auction.description}</td>
                <td><Image src={auction.image} style={{width: '100px'}} /> </td>
                <td>{auction.price}</td>
                <td>
                    <button className="btn btn-danger btn-sm me-2" onClick={() => deleteAuction(auction)}>Delete</button>
                    <Link to={`edit/${auction.id}`} className="btn btn-primary btn-sm">Update</Link>
                </td>
            </tr>
        )
    })

    return (
        <>
            <div className="pt-5 pb-5">
                <Container>
                    <h1>Auctions</h1>
                    <Link to={'addAuction'} className="btn btn-success mt-3">Add New Auction</Link>
                    <table className="table table-striped mt-5 Auctions-table">
                        <thead>
                            <tr key="0">
                                <th style={{width:'5%'}}>ID</th>
                                <th style={{width:'15%'}}>Name</th>
                                <th style={{width:'15%'}}>Category</th>
                                <th style={{width:'30%'}}>Description</th>
                                <th style={{width:'15%'}}>Image</th>
                                <th style={{width:'5%'}}>Price</th>
                                <th style={{width:'15%'}}>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {auctionDataTable}
                        </tbody>
                    </table>
                </Container>
            </div>
        </>
    )
}

export default Auctions;