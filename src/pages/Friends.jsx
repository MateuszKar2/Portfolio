import { useState } from "react";
import styles from './../module/Friends.module.css';
import DataFetching from "components/DataFetching";



const Friends = () => {

    const [showComponent, setShowComponent] = useState(false);



    const handleButtonClick = () => {
        setShowComponent(prevState => !prevState);
    };

    
    return(
        <>
           <div className={styles.btn}>
            <button onClick={handleButtonClick} className={styles.btn__container }>
                {showComponent ? 'Hide friends' : 'Show my friends'}
            </button>
            {showComponent && <DataFetching />}
           </div>
        </>
    )
}

export default Friends;