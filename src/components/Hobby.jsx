import Click from './Click';

const basket = require('./../assets/images/basket.png')

const Hobby = () => {

    return(
        <>
            <h3>Would you like to be part of my team?</h3>
            <img src={basket} alt="Where is my team" width={200}></img>
            <p>If you want?</p>
            <Click/>
        </>
    )
}

export default Hobby;