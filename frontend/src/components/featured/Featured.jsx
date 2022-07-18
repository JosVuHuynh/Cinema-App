import "./featured.scss"
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import {useEffect, useState} from 'react'
import axios from 'axios'
function Featured({type}) {
    const [content, setContent] = useState({})
    useEffect(() =>{
        const getRandomCotent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,{
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDA1ZWNlNDdiYjBmYWI2OWE2Njg5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODE0MDA5MywiZXhwIjoxNjU4NTcyMDkzfQ.0uB7chXwAMQfaDsxk2tesEVFILPnQUvPeTTJ31z7fRI"
                }})
                setContent(res.data[0])
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        getRandomCotent()
    },[type])
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>
                    {type === "movies"? "Movies": "Series"}
                    <select name="genre" id="genre">
                        <option value="">Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </span>
            </div>
        )}
        <img 
        src={content.img}
        alt="" />
        <div className="info">
            <img 
                src={content.imgTitle}
                alt="" 
            />
            <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione suscipit dignissimos tempore veritatis harum totam dolorum vitae, autem fugiat quia error assumenda accusantium alias cumque in, labore incidunt recusandae eos.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured