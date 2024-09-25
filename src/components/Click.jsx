import React, {useState} from 'react'

const Click = () => {



    const [want, setWant] = useState('true')
    const [notWant, setNoWant] = useState('false')

    return(
        <>
            <button onClick = {() => setWant()}>I would like</button>
            <button onClick = {() => setNoWant(notWant)}>No, I wouldn't</button>
        </>
    )

    // const [count, setCount] = useState(0);

    // return (
    //  <div>
    //   <p>You clicked {count} times</p>
    //    <button onClick={() => setCount(count + 1)}>
    //     Click me
    //    </button>
    //   </div>
    // );
    // const [count, setCount] = useState(0)
    // return(
    //     <>
    //         <button onClick={() => setCount(count + 1)}>click</button>
    //     </>
    // )
}
export default Click;