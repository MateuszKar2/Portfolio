import styles from './../module/Police.module.css';
const police = require('./../assets/images/police_1.jpg');
const police2 = require('./../assets/images/police_2.jpg');


const Police = () => {



    return(
        <div className={styles.container}> 

            <div className={styles.police}>
                <h2 className={styles.police__title}>I was a policeman in Olsztyn for three years... </h2>
                    <div className={styles.police__text}>I worked in various departments, 
                        solving problems, working in stressful conditions, 
                        and cooperating in a team became my everyday life.
                    </div>
            </div>
                
            <img className={styles.police__picture} src={police} alt="My job" width={400}></img>

            <ul className={styles.police__list}>
                <li className={styles.police__department}>
                    Prevention
                </li>
                <li className={styles.police__department}>
                    Criminal service
                </li>
                <li className={styles.police__department}>
                    Traffic
                </li>
                <li className={styles.police__department}>
                    Special services
                </li>
            </ul>

            <img className={styles.police__picture} src={police2} alt="My job" width={400}></img>
        </div>
    )
}


export default Police;