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
           <div className={styles.btn}>
            <button onClick={handleButtonClick} className={styles.btn__container }>
                {showComponent ? ':)' : 'students'}
            </button>
            {showComponent && <DataFetching />}
           </div>
        </>
    )
}

export default University;