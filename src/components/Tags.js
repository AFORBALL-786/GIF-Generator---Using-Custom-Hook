import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hook/useGif';


const Tags = () => {
    // const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
    // const[gif,setGifs] = useState("");
    // const[loading,setLoading] = useState(false);
    const [tags,setTags] = useState("");

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tags}`;
    //     const {data} = await axios.get(url);
    //     const imageSource =await data.data.images.downsized.url;
    //     setGifs(imageSource);
    //     setLoading(false);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    // function clickHandler(event){
    //     event.preventDefault();
    //     fetchData();
    // }

    const {gif,loading,fetchData} = useGif(tags);

  return (
    <div className='w-[50%] rounded-md bg-orange-600 flex flex-col items-center gap-y-3'>

      <h1 className='mt-3 uppercase text-1xl font-bold underline' >Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="250"/>)
      }

      <input
        name='tags'
        id='tags'
        className='w-[90%] text-lg py-1 rounded-lg text-center'
        onChange={(event) => setTags(event.target.value)}
        value={tags}
        />

      <button 
        onClick={() => fetchData()}
        className='w-[90%] bg-white rounded-md p-1 font-medium opacity-80 mb-3'>
        Generate
      </button>
    </div>
  )
}

export default Tags