import { Link, Outlet } from "react-router-dom";
import styles from './../module/Experience.module.css';

const Experience = () => {

    return(
            <div>
                <h1>
                    Experience
                </h1>
            <ul>

                <li className={styles.list}>
                    <Link to="university">University</Link>
                </li>

                <li className={styles.list}>
                    <Link to="police">Police</Link>
                </li>

            </ul>
            <Outlet/>
        </div>
    )
}

export default Experience;