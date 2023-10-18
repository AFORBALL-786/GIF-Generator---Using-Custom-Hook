import { useState, useEffect } from 'react';
import axios from 'axios';

const useGif = (tags) => {
    const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const[gif,setGifs] = useState("");
    const[loading,setLoading] = useState(false);

    async function fetchData(){
        setLoading(true);
        const {data} = await axios.get(tags ? `${url}&tag=${tags}` : url);
        const imageSource =await data.data.images.downsized.url;
        setGifs(imageSource);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {gif,loading,fetchData}

}

export default useGif
