import { Link } from "react-router-dom";
import '../css/sidebarAMS.css'

function SidbarAuction(){
    return(
        <>
            <div className="sidebar">
                <ul className="list-unstyled d-flex">
                    <li>
                        <Link to={"/admin/accounts"} className="btn btn-primary text-white">accounts</Link>
                    </li>
                    <li>
                        <Link to={"/admin/transactions"} className="btn btn-primary text-white">transactions</Link>
                    </li>                    
                    <li>
                        <Link to={"/admin/manages"} className="btn btn-primary text-white">Manages</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default SidbarAuction;