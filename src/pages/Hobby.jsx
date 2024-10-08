

import styles from './../module/Hobby.module.css';


const Hobby = () => {

    return(
        <div className={styles.container}>

            <div className={styles.traveling}>   
                <h2 className={styles.traveling__title}>I love traveling</h2>
                    <div className={styles.traveling__container}>
                            
                        <div className={styles.traveling__text}>
                            When I have a vacation, I leave everyday life behind. I'm packing and going on a journey.
                            It may be my country or further away, to another continent.
                        </div>
                    </div>
            </div>

            <div className={styles.sports}>   
                <h2 className={styles.sports__title}>I love sports</h2>
                    <div className={styles.sports__container}>
                            
                        <div className={styles.sports__text}>
                            I love sports, competition and striving for perfection. Basketball, boxing, dancing. It's all part of me.
                        </div>
                    </div>
            </div>

            <div className={styles.reading}>   
                <h2 className={styles.reading__title}>I love reading books</h2>
                    <div className={styles.reading__container}>

                        <div className={styles.reading__text}>
                            When I finish work and need a break from writing code, I like to read a book.
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Hobby;