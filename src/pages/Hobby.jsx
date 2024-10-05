

import styles from './../module/Hobby.module.css';
const travel = require('./../assets/images/travel.jpg');
const boks = require('./../assets/images/boks.jpg');

const Hobby = () => {

    return(
        <div className={styles.container}>

            <div className={styles.traveling}>   
                <h2 className={styles.traveling__title}>I love traveling</h2>
                    <div className={styles.traveling__container}>
                            <img src={travel} alt="Travel" width="200" className={styles.traveling__image}></img>
                        <div className={styles.traveling__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, debitis.
                        </div>
                    </div>
            </div>

            <div className={styles.sports}>   
                <h2 className={styles.sports__title}>I love do sports</h2>
                    <div className={styles.sports__container}>
                            <img src={boks} alt="Boks" width="200" className={styles.sports__image}></img>
                        <div className={styles.sports__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, debitis.
                        </div>
                    </div>
            </div>

            <div className={styles.reading}>   
                <h2 className={styles.reading__title}>I love reading books</h2>
                    <div className={styles.reading__container}>

                        <div className={styles.reading__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, debitis.
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Hobby;