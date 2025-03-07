import styles from './../module/Certificates.module.css';

const goIT = require('./../assets/images/goIT.png');
const ts1 = require('./../assets/images/ts-1.png');
const ts2 = require('./../assets/images/ts-2.png');

const Certificates = () => {

    return(
        <div className={styles.certificatesSection}> {/* Dodanie klasy dla sekcji certyfikatów */}

            {/* Certyfikat 1 */}
            <div className={styles.certificat}>

                <div className={styles.certificat__imageContainer}>
                    <img className={styles.certificat__images} src={goIT} alt="goIT" />
                </div>

                <div className={styles.certificat__info}>
                    <p className={styles.certificat__title}>GoIT course</p>

                    <div className={styles.certificat__description}>
                        During the course, I gained skills in HTML, CSS, JavaScript, React, Redux, and Node.js, and also worked with databases and backend. I focused on application optimization, testing, and creating responsive interfaces. I have experience with Git and Agile/Scrum methodologies, having taken on roles as a frontend developer, Scrum Master, and team leader. Additionally, I improved my technical English, enabling effective communication in an international environment.
                    </div>
                </div>

            </div>

            {/* Certyfikat 2 */}
            <div className={styles.certificat}>

                <div className={styles.certificat__info}>
                    <p className={styles.certificat__title}>TypeScript course</p>

                    <div className={styles.certificat__description}>
                        During the Master TypeScript course, I learned popular design patterns and how to apply them in building complex applications. The course also covered React and Express, which allowed me to gain experience working with modern frontend and backend technologies.
                    </div>
                </div>

                <div className={styles.certificat__imageContainer}>
                    <img className={styles.certificat__images2} src={ts1} alt="TypeScript" />
                    <img className={styles.certificat__images2} src={ts2} alt="TypeScript" />
                </div>

            </div>

        </div>
    );
}

export default Certificates;
