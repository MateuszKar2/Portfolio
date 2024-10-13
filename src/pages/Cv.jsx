import styles from './../module/Cv.module.css';
import {SiTypescript,
        SiJavascript,
        SiReact,
        SiRedux,
        SiNodedotjs,
        SiMongodb,
        SiHtml5,
        SiSass,
        SiCss3,
        } from 'react-icons/si';

    

const myPicture = require('./../assets/images/my.jpg');

const Cv = () => {

    return(
        <>
            <div className={styles.container__circle}>   

                <div className={styles.circle}>
                    <img className={styles.circle__picture} src={myPicture} alt="My Face" width={200} />          
                </div>

                <blockquote className={styles.circle__text}>
                    <p>!satisfiedWithYourLife</p>
                    <p>? getNewPossibilities()</p>
                    <p>.then(findYourWay)</p>
                    <p>.catch(everyMoment)</p>
                    <p>: celebrate(goodLife)</p> 
                </blockquote>

            </div>
                
                <div className={styles.icons}>
                <SiJavascript className={styles.icon__javaScript}/>
                <SiTypescript className={styles.icon__typeScript}/>
                <SiReact className={styles.icon__react}/>
                <SiRedux className={styles.icon__redux}/>
                <SiNodedotjs className={styles.icon__node}/>
                <SiMongodb className={styles.icon__mongo}/>
                <SiHtml5 className={styles.icon__html}/>
                <SiSass className={styles.icon__sass}/>
                <SiCss3 className={styles.icon__css}/>
                </div>

            <div className={styles.text}>
                <p className={styles.text__course}>
                    In 2022, I started the "Fullstack Developer" course at GO IT. During the course, I learned <b>HTML/CSS, JavaScript, React.js and Node.js.</b>
                        My favorite part of the course was React.
                </p>
                <p className={styles.text__favourite}>
                    Based on the components and data management, I can build creative and useful websites that provide a user with smooth experience.
                </p>
                <p className={styles.text__additional}>
                    I have enriched the above skills with the new <b>Vue.js</b> framework. I have also made a natural transition to creating my websites in <b>TypeScript.</b>
                        I have been using GitHub since the beginning of my career. What is more, I am familiar with building projects based on an SSH key.
                    Furthermore, I know how to use a database, especially MONGO DB.
                    I have also done module tests.
                </p>    
                <p className={styles.text__cooporate}>
                    If you are looking for a responsible person who learns quickly and loves programming, contact me and maybe we can come to an agreement and create something cool together.
                </p>
            </div>
        </>
    )
}

export default Cv;