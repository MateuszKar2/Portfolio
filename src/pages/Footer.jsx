import styles from './../module/Footer.module.css';

const Footer = () => {

    return(
        <>
            <div className={styles.footer}>
                Foooter
            </div>
            <div class={styles.contact}>
                <h2>Kontakt</h2>
                    <p class="phone">
                        📞 <a href="tel:+48696270854">+48 696 270 854</a>
                    </p>
                     <p class={styles.contact__linkedin}>
                         💼 <a href="https://www.linkedin.com/in/twojprofil" target="_blank">LinkedIn</a>
                     </p>

                    <p class={styles.contact__github}>
                        🐱‍👤 <a href="https://github.com/twojprofil" target="_blank">GitHub</a>
                    </p> 
            </div>

        </>
    )
}

export default Footer;