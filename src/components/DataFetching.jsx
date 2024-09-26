
import { useEffect, useState } from "react";
import styles from './../module/Data.module.css'

const DataFetching = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
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
            <h1>Postacie z Rick and Morty</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id} className={styles.picture}>
                        {/* <h2>{character.name}</h2> */}
                        <img src={character.image} alt={character.name} className={styles.item}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default DataFetching;