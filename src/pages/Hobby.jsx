

import styles from './../module/Hobby.module.css';


const Hobby = () => {

    return(
        <div className={styles.container}>

            <div className={styles.hobby}>   
                <h2 className={styles.hobby__title}>Travel</h2>
                            
                        <div className={styles.hobby__text}>
                            When I have a vacation, I leave everyday life behind. I'm packing and going on a journey.
                            It may be my country or further away, to another continent.
                        </div>
            </div>

            <div className={styles.hobby}>   
                <h2 className={styles.hobby__title}>Sports</h2>
                            
                        <div className={styles.hobby__text}>
                            I love sports, competition and striving for perfection. Basketball, boxing, dancing, swimming, archery. 
                            It's a part of me that helps me work better.
                        </div>
            </div>


            <div className={styles.hobby}>   
                <h2 className={styles.hobby__title}>Reading</h2>

                        <div className={styles.hobby__text}>
                            When I finish work and need a break from writing code, I like to read a book.
                            Books about programming, history, economics and 19th century novels
                        </div>
            </div>

        </div>
    )
}

export default Hobby;