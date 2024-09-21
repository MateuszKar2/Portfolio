
import { Link, Outlet } from "react-router-dom";


const Past = () => {

    return(
        <div>
            <h1>
                Moja przeszłość
            </h1>
            <ul>
                <li>
                    <Link to="police">Glina</Link>
                </li>
                <li>
                    <Link to="hobby">Basket</Link>
                </li>
                <li>
                    <Link to="friends">Oni</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Past;