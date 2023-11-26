import { useEffect, useState } from "react"
import  axios  from "axios";
import Spinner from "./Spinner"
function Random()
{
    const[dataval,setdataval]=useState(false);
    const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
    async function fetchdata()
    {
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        setdataval(false);
        const {data}= await axios.get(url);
        
        const  imagesource=data.data.images.downsized_large.url;
        setgif(imagesource)
        setdataval(true);
    }
    useEffect(()=>{
        fetchdata();
    },[])
    const[gif,setgif]=useState("");
    function clickhandler()
    {
        fetchdata();
    }
    return (
        <div className="bg-green-400 w-full w-max-[1160px] flex flex-col items-center border border-black mt-[30px]  rounded-md gap-10px">
            <h2 className="text-center font-bold mb-5"><u>A RANDOM GIF</u></h2>
            {
                dataval?(<img src={gif}  width="450" className="mb-5"></img>):(<Spinner></Spinner>)
            }
            <button className="w-10/12 bg-green-200 rounded-md py-1 mb-4" onClick={clickhandler}>GENERATE</button>
        </div>
    )
}

export default Random