import { useEffect, useState } from "react";
import styles from './../module/Friends.module.css';
import DataFetching from "components/DataFetching";

const Friends = () => {

    const [friends, setFriends] = useState('my Friends');

    


    return(
        <div className={styles.friends}>
            <button className={styles.btn} type="button" onClick={() => {setFriends( friends )}}>
                {friends} 
            </button>

        </div>
        // Połączyć się z bazą danych, jeżeli zostanie kliknięty button-friend
    )
}

export default Friends;