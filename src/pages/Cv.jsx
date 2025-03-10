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
                <p className={styles.icons}>
                    <div className={styles.icon}><Html /> </div>
                    <div className={styles.icon}><Css/> </div>
                    <div className={styles.icon}><Sass/> </div>
                    <div className={styles.icon}><JavaScript /> </div>
                    <div className={styles.icon}><React /> </div>
                    <div className={styles.icon}><Redux /> </div>
                    <div className={styles.icon}><Node /></div>
                </p>



            <div className={styles.text}>
                {/* Część druga */}
                <div>
                    I have enriched the above skills with the new <b>Vue.js</b> framework. 
                    I have also made a natural transition to creating my websites in <b>TypeScript.</b>
                </div>  
            </div>
                <p className={styles.icons}>
                    <div className={styles.icon}><TypeScript/> </div>
                    <div className={styles.icon}><Vue/> </div>
                    <div className={styles.icon}><Github/> </div>
                    <div className={styles.icon}><Mongo/> </div>
                    <div className={styles.icon}><Express/> </div>

                </p>
        </>
    )
}

export default Cv;