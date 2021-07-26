import './featured.scss'
import {PlayArrow, InfoOutlined} from '@material-ui/icons';

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                      <option>Hollywood</option>
                      <option value="adventures">Adventure</option>
                      <option value="comedy">Comedy</option>
                      <option value="crime">Genre</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="historical">Historical</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                      <option value="scince fictions">Science Fictions</option>
                      <option value="thriller">Thriller</option>
                      <option value="western">Western</option>
                      <option value="animation">Animation</option>
                      <option value="drama">Drama</option>
                      <option value="documentary">Genre</option>
                      <option value="nollywood">Nollywood</option>
                      <option value="nollywood">Bollywood</option>
                    </select>
                    
                </div>
            )}
                 <img src="https://render.fineartamerica.com/images/rendered/medium/acrylic-print/20/30/hangingwire/break/images-medium-5/space-alex-malikov.jpg" alt=""/>
            <div className="info">
                <img src="https://www.designfreelogoonline.com/wp-content/uploads/2017/05/000840-Infinity-logo-maker-Free-infinito-Logo-design-06.png" alt="" />
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores quasi
                    minima quibusdam aut, dignissimos odio provident vero, quisquam necessitatibus explicabo 
                    error debitis dolor a ad neque reiciendis ea reprehenderit!
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
