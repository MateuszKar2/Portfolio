
import styles from './../styles/Images.module.css'
const myPicture = require('./../assets/images/my.jpg');

const Images = () => {


    return(
        <>
            {/* zdjęcie i cytat */}
            <div className={styles.container__circle}>   

            {/* zdjęcie */}
            <div className={styles.circle}>

                <img className={styles.circle__picture} src={myPicture} alt="My Face" width={200} />      

            </div>
                {/* cytat */}
                <div className={styles.circle__text}>
                    Hi! My name is Mateusz Karpiński. 
                </div>

            </div>
        </>
    )
}



export default Images;