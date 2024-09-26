
import styles from './../module/Menu.module.css'




const Menu = () => {

    return(
        <>
            <div className={styles.text}>
                In April 2022, I started the "Fullstack Developer" course at GO IT. During the course, I learned HTML/CSS, JavaScript, React.js, Node.js.
                My favorite part of learning was React. Based on components and data management, I can create creative and useful websites that provide a smooth user experience.
                I have enriched the above skills with the new Vue.js framework. I also made a natural transition to creating my websites in TypeScript.
                I have been using GitHub since the beginning of my career. However, building projects based on an SSH key is no stranger to me.
                I know how to use a database, especially MONGO DB.
                I have also done module tests.
                If you are looking for a responsible person who learns quickly and loves programming... Contact me and maybe we can come to an agreement and create something cool together
            </div>
            {/* Nowy komponent- projekty na kursie */}
            <div>
                <p>Scrum Master</p>
                {/* Ikonki języków programowania */}
                <link rel="stylesheet" href="https://potocki92.github.io/IceCream/" />
                {/* co robiłem, jak wyglądał nasz projekt */}
            </div>
            <div>
                <p>Developer</p>
                {/* Ikonki języków programowania */}
                <link rel="stylesheet" href="https://rafallakomiec.github.io/filmoteka-goit-js-group-project/" />
                {/* co robiłem, jak wyglądał nasz projekt */}
            </div>
            <div>
                <p>Team Leader</p>
                {/* Ikonki języków programowania */}
                <link rel="stylesheet" href="" />
                {/* co robiłem, jak wyglądał nasz projekt */}
            </div>
        </>
    )
}

export default Menu;