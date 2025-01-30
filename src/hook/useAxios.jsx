import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return { data, error, isLoading };
}
