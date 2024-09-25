
import { Link, Outlet } from "react-router-dom";


const Past = () => {

    return(
        <div>
            <h1>
                My past
            </h1>
            <ul>
                <li>
                    <Link to="police">Police</Link>
                </li>
                <li>
                    <Link to="hobby">Basket</Link>
                </li>
                <li>
                    <Link to="friends">They</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Past;