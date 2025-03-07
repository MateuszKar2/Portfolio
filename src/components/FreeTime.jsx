import styles from './../module/FreeTime.module.css';
import Cube from './Cube'; // Używamy importu ES6, zamiast require

const FreeTime = () => {
    return (
        <div className={styles.freeTime}>
            <h2 className={styles.freeTime__title}>What do I do in my free time?</h2>

            <div className={styles.freeTime__slideInLeft}>
                During my vacation I love to travel both near and far.
            </div>

            <div className={styles.freeTime__slideInRight}>
                I read both light reading and serious books.
            </div>

            <div className={styles.freeTime__slideInLeft}>
                I do a lot of sports, especially basketball.
            </div>

            <div className={styles.freeTime__down}>
                <Cube />

                <div className={styles.freeTime__motto}>
                    <div className={styles.freeTime__slideInRightDown}>
                        8 hours of sleep
                    </div>

                    <div className={styles.freeTime__slideInLeftDown}>
                        8 hours of work
                    </div>

                    <div className={styles.freeTime__slideInRightDown}>
                        8 hours of development
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FreeTime;

