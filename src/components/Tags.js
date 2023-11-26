import Spinner from "./Spinner"
import { useState,useEffect } from "react";

import axios from "axios"
function Tag()
{
    const [tag,settag]=useState("banana");
    const[dataval,setdataval]=useState(false);
    const[gif,setgif]=useState("");
    const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
    async function fetchdata()
    {
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        setdataval(false);
        const {data}=await axios.get(url);
        const imagesource=data.data.images.downsized_large.url;
        setgif(imagesource);
        setdataval(true);
    }
    function clickhandler()
    {
        
        fetchdata();
    }
    useEffect(()=>{
        fetchdata();
    },[])
    function changehandler(event)
    {
        settag(event.target.value);
    }
    return(
        <div>
            <div className="bg-blue-700 w-full w-max-[1160px] flex flex-col items-center border border-black mt-[30px]  rounded-md gap-10px">
            <h2 className="text-center font-bold mb-5"><u>GIF GENERATOR</u></h2>
            {
                dataval?(<img src={gif}  width="450" className="mb-5"></img>):(<Spinner></Spinner>)
            }
            
            <input
            required
            type="text"
            className="focus:outline-none w-10/12 py-1 rounded-lg text-center mb-2"
            onChange={changehandler}
            >
            </input> 
            <button className="w-10/12 bg-yellow-500 rounded-md py-1 " onClick={clickhandler} >GENERATE</button>
            
            
            

               
            
        </div>
        </div>
    )
}
export default Tag