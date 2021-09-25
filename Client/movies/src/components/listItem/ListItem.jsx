import   "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined,ThumbDownAltOutlined} from '@material-ui/icons';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Listitem = ({index, item}) => {
    const [ atHovered, setAtHovered ] = useState(false);
    const [ movie, setMovie ] = useState({})
    useEffect(() => {
        const getMovie = async () => {
            try{
                const res = await axios.get("/movie/find/" + item,{
                headers: {
                    token: ""
                },
            });
            setMovie(res.data);

            } catch(err) {
                console.log(err)
            }
        };
        getMovie();

    }, [item]);

    return (
        <Link to={{ pathname: "/watch", movie: movie }}>
        <div className="listItem"
        // hover when a mouse is entered, and unhover when a mouse leaves 
        style={{left:atHovered && index * 225 -50 + index * 2.5}}
        onMouseEnter={()=> setAtHovered(true)}
        onMouseLeave={()=> setAtHovered(false)}>
            <img src={movie.img} alt="" />
            {atHovered && (
                <>
                 <video src={movie.thriller} autoPlay={true} loop />
                 <div className="itemDatas">
                     <div className="icons">
                         <PlayArrow className="icon"/>
                         <Add className="icon"/>
                         <ThumbUpAltOutlined className="icon"/>
                         <ThumbDownAltOutlined className="icon"/>
                     </div>
                     <div className="itemDataUp">
                         <span>{movie.duration}</span>
                         <span className="ageLimit"> +{movie.limit}</span>
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

export default Listitem
