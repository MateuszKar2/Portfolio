
import FreeTime from 'components/FreeTime';
import styles from './../styles/About.module.css';

const police = require('./../assets/images/police.jpg');


const About = () => {


    return(
    <>
        <FreeTime />


        <div className={styles.police}>

        <h2 className={styles.police__title}>What did I do in the past?</h2>

            <div className={styles.police__text}>
                During my three years of service in the police, I developed <b className={styles.police__subtitle}>as Police officer:</b>
            </div>

            <div className={styles.police__position}>

                <ul className={styles.police__description}>
                    <li className={styles.police__positive}>Ability to work under pressure</li>
                    <li className={styles.police__positive}>Effective problem-solving in crisis situations</li>
                    <li className={styles.police__positive}>Analytical thinking</li>
                    <li className={styles.police__positive}>Teamwork</li>
                    <li className={styles.police__positive}>Effective communication</li>
                    <li className={styles.police__positive}>Attention to detail</li>
                    <li className={styles.police__positive}>Ability to work with processes and procedures</li>
                </ul>

                <img className={styles.police__images} src={police} alt="police"  loading="lazy"/>

            </div>
        </div>

    </>

    )
}





export default About;