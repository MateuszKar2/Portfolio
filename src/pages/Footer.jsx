import styles from './../module/Footer.module.css';

const Footer = () => {

    return(
        <>
            <div className={styles.footer}>

                        <p>
                            📞 <a className={styles.footer__media} href="tel:+48696270854">+48 696 270 854</a>
                        </p>

                        <p>
                                <a className={styles.footer__media} href="https://linkedin.com/in/mateuszkarpiński" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>

                        <p>
                                <a className={styles.footer__media} href="https://github.com/MateuszKar2" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </p> 
            </div>

        </>
    )
}

export default Footer;