import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY } from '../../constant/constants'
import './Rowpost.css'
import axios from '../../axios'

function Rowpost(props) {
  const[movies,setMovies]=useState([])
  const[urlid,seturlId]=useState()
  useEffect(() => {

    axios.get(props.url).then(response=>{
      setMovies(response.data.results)

   
  })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
       seturlId(response.data.results[0])
    }else{
      console.log("array empty");
    }
  })
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj,index)=>
        <img key={index} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'samllPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="post" srcset="" />
        )}
      </div>
     { urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  )
}


export default Rowpost
