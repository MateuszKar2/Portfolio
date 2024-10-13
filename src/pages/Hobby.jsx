

import styles from './../module/Hobby.module.css';


const Hobby = () => {

    return(
        <div className={styles.container}>

            <div className={styles.hobby}>   
                <h2 className={styles.hobby__title}>Travel</h2>
                            
                        <div className={styles.hobby__text}>
                            When I go on holiday, I leave everyday life behind. I pack my luggage and set off.
                            It may be my country or further away, even another continent.
                        </div>
            </div>

            <div className={styles.hobby}>   
                <h2 className={styles.hobby__title}>Sports</h2>
                            
                        <div className={styles.hobby__text}>
                            I love sports, competition and striving for perfection. Basketball, boxing, dancing, swimming and archery. 
                            These activities help me work better.
                        </div>
            </div>


            <div className={styles.hobby}>   
                <h2 className={styles.hobby__title}>Reading</h2>

                        <div className={styles.hobby__text}>
                            When I finish work and need a break from writing code, I like to read a book.
                            My favorite bokks are about programming, history and economics. I also enjoy 19th century novels
                        </div>
            </div>

        </div>
    )
}

export default Hobby;