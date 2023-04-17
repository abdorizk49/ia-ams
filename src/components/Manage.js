import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

function Manage(){
    const [newAccountsData, setNewAccountsData] = useState()
    const newAccountsUrl = 'http://localhost:9000/newAccounts'
    useEffect(() => {
        getAllNewAccounts();
    }, [])

    const getAllNewAccounts = () => {
        fetch(newAccountsUrl)
        .then((res) => res.json())
        .then((data) => {
            setNewAccountsData(data)
        })
    }



    const newAccountDataTable = newAccountsData?.map((newAccount) => {
        return(
            <tr key={newAccount.id} id={newAccount.id}>
                <td>{newAccount.id}</td>
                <td>{newAccount.name}</td>
                <td>{newAccount.phone}</td>
                <td>{newAccount.email}</td>
                <td><Image src={newAccount.image} style={{width: '100px'}} /> </td>
                <td>{newAccount.address}</td>
                <td>
                    <button className="btn btn-success me-2">Accept</button>
                    <button className="btn btn-danger">Reject</button>
                </td>
            </tr>
        )
    })

    return (
        <>
            <h1 className="mt-5" >New Accounts</h1>
            <table className="table table-striped mt-5 newAccounts-table">
                <thead>
                    <tr key="0">
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Address</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {newAccountDataTable}
                </tbody>
            </table>
        </>
    )
}
export default Manage;