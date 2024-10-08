import { useState } from "react";
import styles from './../module/University.module.css';
import DataFetching from "components/DataFetching";



const University = () => {

    const [showComponent, setShowComponent] = useState(false);



    const handleButtonClick = () => {
        setShowComponent(prevState => !prevState);
    };

    
    return(
        <>
            <h2 className={styles.university__title}>University of Warmia and Mazury</h2>
            <div className={styles.university__text}>I spent five years studying and earned my master's degree. Throughout this journey,
                I acquired a well-rounded understanding of my field, 
                nurtured my passions, and made many wonderful friends along the way.</div>
            <div className={styles.university__question}>Do you want to meet my friends?</div>
           <div className={styles.btn}>
            <button onClick={handleButtonClick} className={styles.btn__container }>
                {showComponent ? '<' : 'Friends'}
            </button>
            {showComponent && <DataFetching />}
           </div>
        </>
    )
}

export default University;