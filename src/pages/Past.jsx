import { Link, Outlet } from "react-router-dom";
import styles from './../module/Past.module.css';

const Past = () => {

    return(
            <div>
            <h1>
                My past
            </h1>
            <ul>
                <li className={styles.list}>
                    <Link to="police">Police</Link>
                </li>
                <li className={styles.list}>
                    <Link to="hobby">Basket</Link>
                </li>
                <li className={styles.list}>
                    <Link to="friends">My friends</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Past;