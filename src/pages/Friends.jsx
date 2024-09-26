import { useState } from "react";
import styles from './../module/Friends.module.css';

const Friends = () => {

    const [friends, setFriends] = useState('my Friends');




    return(
        <div>
            <button className={styles.btn} type="button" onClick={() => {setFriends( 'here they are' )}}>
                {friends}
            </button>
        </div>
        // Połączyć się z bazą danych, jeżeli zostanie kliknięty button-friend
    )
}

export default Friends;