
const police = require('./../assets/images/police_1.jpg');
const police2 = require('./../assets/images/police_2.jpg');


const Police = () => {



    return(
        <>
            <h2>I was a policeman in Olsztyn for three years... </h2>
            <ul>
                <li>
                    Prevention
                </li>
                <li>
                    Criminal service
                </li>
                <li>
                    Traffic
                </li>
                <li>
                    Special services
                </li>
            </ul>
            <img src={police} alt="My job" width={200}></img>
            <img src={police2} alt="My job" width={200}></img>
        </>
    )
}


export default Police;