import { useEffect, useState } from "react";

function Transaction(){
    const [transactionsData, setTransactionsData] = useState()
    const transactionsUrl = 'http://localhost:9000/transactions'
    useEffect(() => {
        getAllTransactions();
    }, [])

    const getAllTransactions = () => {
        fetch(transactionsUrl)
        .then((res) => res.json())
        .then((data) => {
            setTransactionsData(data)
        })
    }



    const transactionDataTable = transactionsData?.map((transaction) => {
        return(
            <tr key={transaction.id} id={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.name}</td>
                <td>{transaction.status}</td>
            </tr>
        )
    })

    return (
        <>
            <h1 className="mt-5" >Transactions</h1>
            <table className="table table-striped mt-5 transactions-table">
                <thead>
                    <tr key="0">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionDataTable}
                </tbody>
            </table>
        </>
    )
}

export default Transaction;