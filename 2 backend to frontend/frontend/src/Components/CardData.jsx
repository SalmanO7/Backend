import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardData = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/data');
                if (Array.isArray(response.data)) {
                    setApiData(response.data);
                } else {
                    console.error("Data is not an array:", response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);
    console.log(apiData)
    return (
        <div>
            {Array.isArray(apiData) && apiData.map((data) => (
                <div key={data.id}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardData;
