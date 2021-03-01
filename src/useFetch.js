import { useState, useEffect } from 'react';

const useFetch = (url) => { 
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Abort controller
        const abortController = new AbortController();
        // fetch function
    fetch(url, {signal: abortController.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could not get data');
            }
            return res.json()}).then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            }).catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted');
                }else{
                setIsLoading(false);
                setError(err.message);
            }});
            return () => abortController.abort();

    }, [url]);

    return {data, isLoading, error}

}

export default useFetch;