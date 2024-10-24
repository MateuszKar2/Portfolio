

import styles from './../module/Projects.module.css';
import {SiJavascript, SiReact, SiHtml5, SiSass, SiRedux, SiNodedotjs, SiMongodb } from 'react-icons/si';

const iceCream = require('./../assets/images/iceCream.png');
const filmoteka = require('./../assets/images/Filmoteka.png');
const kapusta =require('./../assets/images/Kapusta.png');


const  Projects = () => {

    return(
        <>           
            <div className={styles.project__header}>
                <p className={styles.project__position}>Scrum Master</p>
                    <div className={styles.project__icons}>
                        <SiHtml5/>
                        <SiSass />
                    </div>
                    <a href="https://potocki92.github.io/IceCream/" target="_blank" rel="noopener noreferrer">
                            https://potocki92.github.io/IceCream/
                    </a>
            </div>
            <div className={styles.project__place}>
                <div className={styles.project__text}>
                    Group project. We built a responsive website. We used the BEM methodology. We used "Parcel".
                    In this project I was the Scrum Master. I also designed the "Products" section for computers, tablets and phones.
                    I chaired group meetings and supported developers.
                    I presented the group project.
                </div>
                <img src={iceCream} 
                alt="My project" 
                style={{
                width: '200px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                margin: '20px'
                    }} 
                />
            </div>
            

            <div className={styles.project__header}>
                <p className={styles.project__position}>Developer</p>
                    <div className={styles.project__icons}>
                        <SiJavascript/>
                        <SiSass />
                        <SiHtml5/>
                    </div>
                    <a href="https://rafallakomiec.github.io/filmoteka-goit-js-group-project/" target="_blank" rel="noopener noreferrer">
                             https://rafallakomiec.github.io/filmoteka-goit-js-group-project/
                    </a>
            </div>
            
            <div className={styles.project__place}>
                <div className={styles.project__text}>
                    We created a web application that allows you to search for movies by title. Users can get detailed information about movies, such as description, rating, cast, and many more.
                    We used an external API from the TMDb database to fetch movie data. During the project, I used advanced JavaScript and applied the BEM methodology with the SASS preprocessor.
                    My tasks included implementing the modal, managing localStorage, and configuring the API.
                </div>
                <img 
                src={filmoteka} 
                alt="My project two" 
                style={{
                    width: '200px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    margin: '20px'
                }} 
                />
            </div>

            <div className={styles.project__header}>
                <p className={styles.project__position}>Team Leader</p>
                    <div className={styles.project__icons}>
                        <SiReact/>
                        <SiRedux/>
                        <SiNodedotjs/>
                        <SiMongodb/>
                    </div>

            <div>
                <a className={styles.project__links} href="https://kapusta-front-end.vercel.app/login" target="_blank" rel="noopener noreferrer">
                        https://kapusta-front-end.vercel.app/login(frontend)
                </a>

                <a className={styles.project__links} href="https://goit-fs17-react-node-final-project-backend.vercel.app/" target="_blank" rel="noopener noreferrer">
                        https://goit-fs17-react-node-final-project-backend.vercel.app/(backhend)
                </a>
            </div>

            </div>

            <div className={styles.project__place}>
                <div className={styles.project__text}>
                I took on the role of team leader for this project, 
                where I was responsible for delegating tasks and ensuring the accuracy of the code.
                 As the project progressed, I also managed code conflicts and facilitated resolutions.
                </div>
                <img src={kapusta}
                 alt="My project three"
                 style={{
                    width: '200px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    margin: '20px'
                }} 
                />
            </div>
            <div className={styles.project__cont}>
                <div className={styles.project__footer}>I invite! I have many more projects on github</div>
            </div>


        </>
    )
}

export default Projects;