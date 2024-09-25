
import { Link, Outlet } from "react-router-dom";
import { PagePast } from "styled/Past.styled.ts";


const Past = () => {

    return(
        <PagePast>
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
        </PagePast>
    )
}

export default Past;