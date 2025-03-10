import styles from './../styles/Footer.module.css';

const phone = require('./../assets/images/phone.png');
const linkedin = require('./../assets/images/linkedin.png');
const github = require('./../assets/images/github.png');

const Footer = () => {



    return(

                <div className={styles.footer}>


                    <div className={styles.footer__text}>
                        If you are looking for a responsible person who learns quickly and loves programming, contact me and maybe we can come to an agreement and create something cool together.
                    </div>

                    <div className={styles.footer__position}>
                        <p className={styles.footer__security}>
                            Copy Right Reserved @ 2025
                        </p>
                        <div className={styles.footer__media}>
                            <div>
                                <a href="tel:+48696270854">
                                    <img 
                                        className={styles.footer__icons}
                                        src={phone} 
                                        alt={phone}
                                    />
                                </a>
                            </div>

                                <div>
                                    <a href="https://linkedin.com/in/mateuszkarpiński" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            className={styles.footer__icons}
                                            src={linkedin} 
                                            alt={linkedin}
                                        />
                                    </a>
                                </div>                        

                                <div>
                                    <a href="https://github.com/MateuszKar2" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            className={styles.footer__github}
                                            src={github} 
                                            alt={github}
                                        />
                                    </a>
                                </div> 
                            </div>
                        </div>                                
                </div>
    )
}

export default Footer;