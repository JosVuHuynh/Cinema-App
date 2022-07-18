import "./listItem.scss"
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons"
import axios from 'axios'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function ListItem({index, item}) {

  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const getMovie = async () => {
     try {
       const res = await axios.get(
          "movies/find/"+ item,
         {
           headers: {
             token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDA1ZWNlNDdiYjBmYWI2OWE2Njg5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODE0MDA5MywiZXhwIjoxNjU4NTcyMDkzfQ.0uB7chXwAMQfaDsxk2tesEVFILPnQUvPeTTJ31z7fRI"
           }
         }
         )
       setMovie(res.data) 
       console.log(res.data)
     } catch (err) {
       console.log(err)
     }
    }
    getMovie();
 },[item])
  return (
    <Link to={{pathname: "/watch", movie: movie}}>

    <div className="listItem" 
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      
      >
      <img
      src={movie.img}
      alt=""
      />
      {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
      <div className="itemInfo">
          <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
          </div>
          <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
             {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
      </div>
          </>
      )}
      
    </div>
    </Link>

  )
}
