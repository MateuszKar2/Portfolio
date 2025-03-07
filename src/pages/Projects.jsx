

import styles from './../module/Projects.module.css';

import {JavaScript, React, Node, Github, Mongo, Sass, Redux, TypeScript} from './Icons';

const iceCream = require('./../assets/images/iceCream.png');
const filmoteka = require('./../assets/images/Filmoteka.png');
const kapusta = require('./../assets/images/Kapusta.png');
const feedback = require('./../assets/images/feedback.png');
const movies = require('./../assets/images/movies.png');
const registration = require('./../assets/images/registration.png');

const  Projectsss = () => {

    return(
        <>  
        {/* Projekt pierwszy        */}
<div className={styles.project}> 
    {/* Nagłówek z pozycją */}
    <div className={styles.project__info}>
        <p className={styles.project__position}>Scrum Master</p>
        <div className={styles.project__description}>
            It was a group project where we built a responsive website using the BEM methodology and "Parcel." As the Scrum Master, I managed the team's tasks, ensured effective communication, and kept the project on track. I designed the "Products" section for computers, tablets, and phones, focusing on user-friendly and responsive layouts. I also chaired group meetings, supported developers, and presented the final project.
        </div>
    </div>

    {/* Wizualizacja i link */}
    <div className={styles.project__visual}>
        <div className={styles.project__live}>
            <div className={styles.project__icons}>
                <JavaScript />
                <Sass />
                <Github />
            </div>
            <a className={styles.project__link} href="https://potocki92.github.io/IceCream/" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>

        <img className={styles.project__picture} src={iceCream} alt="Ice Cream Project - Responsive Web Design" />
    </div>

    {/* Separator */}
    <hr className={styles.separator} />
</div>


            {/* Projekt drugi */}
<div className={styles.project}> 
    {/* Nagłówek z pozycją */}
    <div className={styles.project__info}>
        <p className={styles.project__position}>Frontend Developer</p>
        <div className={styles.project__description}>
            I created a web application that lets users search for movies by title and view detailed information like description, rating, and cast, using the TMDb API. I worked with advanced JavaScript, applied the BEM methodology with SASS, and handled tasks such as implementing the modal, managing localStorage, and configuring the API.
        </div>
    </div>

    {/* Wizualizacja i link */}
    <div className={styles.project__visual}>
        <div className={styles.project__live}>
            <div className={styles.project__icons}>
                <JavaScript />
                <Sass />
                <Github />
            </div>
            <a className={styles.project__link} href="https://rafallakomiec.github.io/filmoteka-goit-js-group-project/" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>

        <img className={styles.project__picture} src={filmoteka} alt="Filmoteka Project" />
    </div>

    {/* Separator */}
    <hr className={styles.separator} />
</div>


{/* Projekt trzeci */}
<div className={styles.project}> 
    {/* Nagłówek z pozycją */}
    <div className={styles.project__info}>
        <p className={styles.project__position}>Frontend Developer</p>
        <div className={styles.project__description}>
            In this task, I created an app to collect feedback from café users with three response options: good, neutral, or bad. The app displayed counts for each category, then added total responses and the percentage of positive feedback. I refactored the app by separating logic into components and ensured statistics appeared only after receiving feedback. Finally, I rewrote the app using React hooks.
        </div>
    </div>

    {/* Wizualizacja i link */}
    <div className={styles.project__visual}>
        <div className={styles.project__live}>
            <div className={styles.project__icons}>
                <TypeScript />
                <React />
            </div>
            <a className={styles.project__link} href="https://mateuszkar2.github.io/goit-react-hw-04-feedback/" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>

        <img className={styles.project__picture} src={feedback} alt="Feedback Project" />
    </div>

    {/* Separator */}
    <hr className={styles.separator} />
</div>


{/* Projekt czwarty */}
<div className={styles.project}> 
    {/* Nagłówek z pozycją */}
    <div className={styles.project__info}>
        <p className={styles.project__position}>Frontend Developer</p>
        <div className={styles.project__description}>
            I created an application for searching and saving movies, integrating it with the themoviedb.org API. The app allows users to view popular movies, search by keyword, and access detailed movie information, including cast and reviews. I implemented asynchronous code loading using React.lazy() and Suspense, and refactored the app with React hooks, improving both its performance and structure.
        </div>
    </div>

    {/* Wizualizacja i link */}
    <div className={styles.project__visual}>
        <div className={styles.project__live}>
            <div className={styles.project__icons}>
                <TypeScript />
                <React />
            </div>
            <a className={styles.project__link} href="https://mateuszkar2.github.io/goit-react-hw-05-movies/" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>

        <img className={styles.project__picture} src={movies} alt="Movies Project" />
    </div>

    {/* Separator */}
    <hr className={styles.separator} />
</div>


{/* Projekt piąty */}
<div className={styles.project}> 
    {/* Nagłówek z pozycją */}
    <div className={styles.project__info}>
        <p className={styles.project__position}>Frontend Developer</p>
        <div className={styles.project__description}>
            I created a "Phonebook" app with user registration, login, and contact management. I integrated a JWT backend for authentication and added routing with React Router. I refactored the app to replace local storage with a backend and used Redux Toolkit to manage the state for contacts and filters. Asynchronous functions interact with the backend to enable saving, deleting, and filtering contacts.
        </div>
    </div>

    {/* Wizualizacja i link */}
    <div className={styles.project__visual}>
        <div className={styles.project__live}>
            <div className={styles.project__icons}>
                <TypeScript />
                <React />
                <Redux />
            </div>
            <a className={styles.project__link} href="https://mateuszkar2.github.io/goit-react-hw-08-phonebook/" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>

        <img className={styles.project__picture} src={registration} alt="Phonebook Project" />
    </div>

    {/* Separator */}
    <hr className={styles.separator} />
</div>


{/* Projekt szósty */}
<div className={styles.project}> 
    {/* Nagłówek z pozycją */}
    <div className={styles.project__info}>
        <p className={styles.project__position}>Team Leader</p>
        <div className={styles.project__description}>
            I took on the role of team leader for this project, where I was responsible for delegating tasks and ensuring the accuracy of the code. As the project progressed, I also managed code conflicts, helping resolve them and ensuring the team worked efficiently. Additionally, I coordinated the team’s efforts, organized meetings, and made sure the code quality was maintained while tasks were completed on time.
        </div>
    </div>

    {/* Wizualizacja i link */}
    <div className={styles.project__visual}>
        <div className={styles.project__live}>
            <div className={styles.project__icons}>
                <React />
                <Redux />
                <Node />
                <Mongo />
            </div>
            <a className={styles.project__link} href="https://kapusta-front-end.vercel.app/login" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>

        <img className={styles.project__picture} src={kapusta} alt="Kapusta Project" />
    </div>

    {/* Separator */}
    <hr className={styles.separator} />
</div>


        </>
    )
}

export default Projectsss;