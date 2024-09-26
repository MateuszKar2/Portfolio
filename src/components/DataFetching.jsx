
import { useEffect, useState } from "react";


const DataFetching = () => {

const [data, setData] = useState([]);
const [loading, setLoading] = useState('true');
const [error, setError] = useState('null');

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/location?page=2');
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    };
},[]);

if (loading) {
    return <div>Loading...</div>
}

if (error) {
    return <div>Error: {error.message}</div>
}

    return(
        <>
            <div>
                <h1>Data:</h1>
                <ul>
                    {data.map(item => {
                        <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>       
        </>
    )
}

export default DataFetching;