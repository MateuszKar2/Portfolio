

import { useState } from "react";





const Friends = () => {

    const [friends, setFriends] = useState('my Friends');

    return(
        <div>
            <button type="button" onClick={() => {setFriends( 'here they are' )}}>
                {friends}
            </button>
        </div>
    )
}

export default Friends;