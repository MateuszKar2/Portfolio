


const basket = require('./../assets/images/basket.jpg')

const Hobby = () => {

    return(
        <>      
            <h2>I love playing basketball</h2>
            {/* zdjecie jako tło */}
            <h3>Would you like to be part of my team?</h3>
            <img src={basket} alt="Where is my team" width={200}></img>
            <p>If you want?</p>
            {/* jesli chcesz należeć do mojej drużyny formularz po prawej stronie, jak nie powrót do Cv */}
            {/* po prawej stronie formularz: imie, nazwisko, numer telefonu, pozycja */}
            {/*pozycje można wybrać z kilku opcji: np. rozgrywający, center i itp. */}
        </>
    )
}

export default Hobby;