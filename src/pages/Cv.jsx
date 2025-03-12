import Images from '../components/Images';
import styles from './../styles/Cv.module.css';

import {Html, Css, JavaScript, React, Node, Vue, TypeScript, Github, Mongo, Sass, Redux, Express} from '../components/Icons';


const Cv = () => {

    return(
        <>           
           <Images/>

            <div className={styles.text}>

                {/* Część pierwsza */}
                <div>
                    In 2022, I started the "Fullstack Developer" course at GO IT. During the course, I learned <b>HTML/CSS, JavaScript, React.js and Node.js.</b>
                        My favorite part of the course was React.
                </div>
            </div>
                <div className={styles.icons}>
                    <p className={styles.icon}><Html /> </p>
                    <p className={styles.icon}><Css/> </p>
                    <p className={styles.icon}><Sass/> </p>
                    <p className={styles.icon}><JavaScript /> </p>
                    <p className={styles.icon}><React /> </p>
                    <p className={styles.icon}><Redux /> </p>
                    <p className={styles.icon}><Node /></p>
                </div>



            <div className={styles.text}>
                {/* Część druga */}
                <div>
                    I have enriched the above skills with the new <b>Vue.js</b> framework. 
                    I have also made a natural transition to creating my websites in <b>TypeScript.</b>
                </div>  
            </div>
                <div className={styles.icons}>
                    <p className={styles.icon}><TypeScript/> </p>
                    <p className={styles.icon}><Vue/> </p>
                    <p className={styles.icon}><Github/> </p>
                    <p className={styles.icon}><Mongo/> </p>
                    <p className={styles.icon}><Express/> </p>

                </div>
        </>
    )
}

export default Cv;