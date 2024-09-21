import { useState } from "react";




const Friends = () => {

const [value, setValue] = useState(0);
const [name, setName] = useState('They')

    return(
        <div>
            if(
            <button type="button" onClick={() => {setName('To jest')}}>
                They
            </button>
            ) ? (
                {name}
            )
            {/* {value}
            <button type="button" onClick={() => {setValue(value - 1)}}>
                Value
            </button>
            <button type="button" onClick={() => {setValue(value + 1)}}>
                Value
            </button> */}
        </div>
    )
}

export default Friends;