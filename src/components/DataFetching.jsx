
import { useEffect, useState } from "react";
import styles from './../module/Data.module.css'

const DataFetching = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character?page=2&name=rick&status=alive');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) {
        return <div>Ładowanie...</div>;
    }

    if (error) {
        return <div>Błąd: {error.message}</div>;
    }

    return (
        <div>
            <h1 className={styles.items__title}>My Friends</h1>
            <ul className={styles.items}>
                {characters.map(character => (
                    <li key={character.id} className={styles.item}>
                        <img src={character.image} alt={character.name} className={styles.item__picture}/>
                        <h2 className={styles.item__name}>{character.name}</h2>
                        <h4 className={styles.item__species}>{character.species}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default DataFetching;